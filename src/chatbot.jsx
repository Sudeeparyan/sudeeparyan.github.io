import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { useState, useRef, useEffect } from 'react';
import './chatbot.css'; // Make sure you have this CSS file or adjust styling

// This is the context provided to the chatbot about Sudeep
const aboutme = `
Sudeep Aryan Gaddameedi is a tech enthusiast with 2 years of experience in DevOps, Machine Learning, Generative AI, and VLSI. As a Project Engineer at Soliton Technologies since June 2023, he has been working on hardware testing, developing chip modules, and creating an AI assistant chatbot for Texas Instruments. Previously, he was a Machine Learning Engineer in the Device Vision Project. He interned at Soliton Technologies from June 2022 to May 2023, where he developed skills in DevOps tools and full-stack development, completing projects like a weather application and Timely. Sudeep's projects include working on a Battery Management System for Texas Instruments, developing a data analysis tool for Intel, and building a quadcopter. He has certifications in Machine Learning, IoT, Neural Networks, Google Workspace Administration, Full Stack Web Development, and AWS. Sudeep holds a Bachelor of Technology from Amrita Vishwa Vidyapeetham with a CGPA of 7.89, and has published an IEEE paper on CNN-based Curved Path Detection and Obstacle Avoidance for an autonomous rover. His technical skills encompass Python, JavaScript, C, C++, AI, DevOps tools, web technologies, cloud platforms, and microcontrollers. Proficient in English, Telugu, Hindi, and Tamil, Sudeep enjoys reading nonfiction, playing kabaddi and volleyball, and going to the gym. He can be reached at sudeeparyang@gmail.com and 8309135484. His portfolio and professional profiles are available on website, GitHub, and LinkedIn.
`;

// System instruction for the chatbot
const systemPrompt = `
You are a helpful AI assistant chatbot created by Sudeep Aryan Gaddameedi.
Your purpose is to answer questions about Sudeep based *only* on the information provided below.
Be friendly and informative. If a question is asked that cannot be answered using the provided details, politely state that you don't have that specific information about Sudeep. Do not make up information.

Details about Sudeep:
${aboutme}
`;

export default function Chatbot() {
    // --- SECURITY WARNING ---
    // NEVER hardcode your API key in client-side JavaScript like this for production.
    // Anyone can view it in the browser's source code.
    // Use a backend proxy or serverless function to handle API calls securely.
    const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key ONLY for testing
    // -----------------------

    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([
        // We won't display the system message, but it's used for context if needed via systemInstruction
        // Note: Directly including role:'system' in history might not work for all models/SDK versions.
        // Using the dedicated systemInstruction parameter is often preferred.
        // { role: 'system', content: systemPrompt }, // Example: Keep if needed for context logic
        {
            role: 'assistant',
            content: "Hi there! I'm Sudeep's AI assistant. How can I help you learn more about him?"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false); // For input styling

    const chatContainerRef = useRef(null);
    const inputRef = useRef(null); // Ref for the input field

    // --- Initialize the Gemini API ---
    // Ensure API_KEY is defined before this runs.
    // Handle the case where API_KEY might be missing (especially if replacing the hardcoded value)
    let genAI, model;
    try {
        if (!API_KEY || API_KEY === "AIzaSyBJSX_Hv8vBOd4e4FHBBvRAcSNSnwYR_F0") {
             console.warn("API Key is missing or is a placeholder. Chatbot functionality will be limited.");
             // Optionally disable input or show a message if the key is missing
        } else {
            genAI = new GoogleGenerativeAI(API_KEY);
            model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash", // Using gemini-1.5-flash as gemini-2.5-flash might not be available yet. Adjust if needed.
                // --- Pass system instruction explicitly ---
                systemInstruction: {
                    role: "system", // Role might just need to be 'user' or 'model' depending on SDK/model
                    parts: [{ text: systemPrompt }],
                },
            });
        }
    } catch (error) {
        console.error("Error initializing GoogleGenerativeAI:", error);
        // Handle initialization error (e.g., show an error message to the user)
        setMessages(prev => [...prev, { role: 'assistant', content: "Error initializing the AI model. Please check the configuration." }]);
    }
    // --------------------------------

    // --- Scroll to bottom effect ---
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);
    // -------------------------------

    // --- Submit Handler ---
    const submitForm = async (e) => {
        e.preventDefault();
        if (!messageInput.trim() || isLoading || !model) { // Also check if model initialized
            if (!model) console.error("Chat model not initialized. Cannot send message.");
            return;
        }

        const newUserMessage = { role: 'user', content: messageInput };
        // Update UI immediately with user's message
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        const currentInput = messageInput; // Store input before clearing
        setMessageInput('');
        setIsLoading(true);

        try {
            // --- Prepare history for the API ---
            // Map roles and filter out any potential system messages if they were in state
            const historyForAPI = messages
                .filter(msg => msg.role === 'user' || msg.role === 'assistant') // Only user/assistant messages
                .map(msg => ({
                    // Map 'assistant' role to 'model' for the API
                    role: msg.role === 'assistant' ? 'model' : msg.role,
                    parts: [{ text: msg.content }]
                }));

            // --- Use startChat for conversation context ---
            const chat = model.startChat({
                history: historyForAPI,
                generationConfig: {
                    maxOutputTokens: 800, // Adjust as needed
                    temperature: 0.7,   // Adjust creativity vs factualness
                },
                 safetySettings: [ // Adjust safety settings as needed
                     { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                     { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                     { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                     { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                 ],
            });

            console.log("Sending to API:", currentInput);
            console.log("With History:", historyForAPI);

            // Send only the new user message (context is managed by startChat)
            const result = await chat.sendMessage(currentInput);
            const response = await result.response;
            const apiMessageText = await response.text();

            console.log("Received from API:", apiMessageText);

            // Add assistant's response to messages state
            setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: apiMessageText }]);

        } catch (error) {
            console.error("Error generating response:", error);
            let errorMessage = "I'm sorry, I encountered an error processing your request.";
            // Try to get more specific error info if available
             if (error?.response?.promptFeedback?.blockReason) {
               errorMessage += ` (Content blocked: ${error.response.promptFeedback.blockReason})`;
             } else if (error instanceof Error) {
               errorMessage += ` (Details: ${error.message})`;
             } else {
               errorMessage += ` Please try again later.`;
             }

            // Update state with error message
            setMessages(prevMessages => [
                ...prevMessages,
                { role: 'assistant', content: errorMessage }
            ]);
        } finally {
            setIsLoading(false);
            // Refocus input after sending/receiving
            inputRef.current?.focus();
        }
    };
    // ----------------------

    // Helper function to format date and time (remains the same)
    const getFormattedTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div>
            <section className="chatbot container">
                {/* Headline Section */}
                <h2 className="headline custom-headline">
                    <span className="heading">My AI Assistant</span>
                </h2>

                <div className="chatbot-card">
                    {/* Info Panel on the Left */}
                    <div className="chat-info">
                        <div className="info-content">
                            <h3 className="info-title">Personal AI Assistant</h3>
                            <p>I've created this interactive AI chatbot to help you learn more about my skills, work experience, and background. Feel free to ask any questions!</p>
                            <p>Looking for new opportunities! If you have a project where my skills could be valuable, I'd love to connect.</p>
                            {/* Ensure the resume path is correct relative to your public folder */}
                            <a href="/Sudeep_Aryan_Resume.pdf" className="download-button" download>
                                <span className="button-icon" role="img" aria-label="document">📄</span>
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Chat Box on the Right */}
                    <div className="chat-box">
                        <div className="chat-header">
                            <div className="assistant-info">
                                <div className="assistant-avatar">SA</div> {/* Initials or Image */}
                                <div className="assistant-details">
                                    <h4>Sudeep's Assistant</h4>
                                    <span className={`status-indicator ${model ? 'online' : 'offline'}`}>
                                        {model ? 'Online' : 'Offline'}
                                    </span>
                                </div>
                            </div>
                            <div className="chat-time">{getFormattedTime()}</div>
                        </div>

                        {/* Message Display Area */}
                        <div className="scroll-area" ref={chatContainerRef}>
                            <ul className="chat-messages">
                                {messages.map((message, index) => (
                                    // Filter out system messages from display
                                    message.role !== 'system' && (
                                        <li key={index} className={`message-item ${message.role}`}>
                                            <div className="message-container">
                                                <span className={`avatar ${message.role === 'assistant' ? 'assistant-avatar' : 'user-avatar'}`}>
                                                    {message.role === 'user' ? 'You' : 'SA'}
                                                </span>
                                                <div className="message-content">
                                                    {/* Render message content safely - consider using a library like 'react-markdown' if you expect Markdown */}
                                                    <div className="message">{message.content}</div>
                                                    <div className="message-time">{getFormattedTime()}</div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                ))}
                                {/* Loading Indicator */}
                                {isLoading && (
                                    <li className="message-item assistant typing">
                                        <div className="message-container">
                                            <span className="avatar assistant-avatar">SA</span>
                                            <div className="message-content">
                                                <div className="message">
                                                    <div className="typing-indicator">
                                                        <span></span><span></span><span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Input Form */}
                        <form onSubmit={submitForm} className="chat-message">
                            <input
                                type="text"
                                placeholder={model ? "Ask about Sudeep's skills, experience..." : "AI Assistant is offline"}
                                value={messageInput}
                                onChange={e => setMessageInput(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                ref={inputRef}
                                className={isFocused ? 'input-focused' : ''}
                                disabled={isLoading || !model} // Disable input when loading or if model failed to init
                            />
                            <button
                                type="submit"
                                className={`send-button ${messageInput.trim() ? 'active' : ''}`}
                                disabled={!messageInput.trim() || isLoading || !model}
                            >
                                {isLoading ?
                                    <span className="send-icon loading"></span> : // Use CSS for loading animation
                                    <span className="send-icon">➤</span> // Send icon
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}