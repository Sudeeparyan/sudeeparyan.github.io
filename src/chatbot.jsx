import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { useState, useRef, useEffect } from 'react';
import './chatbot.css'; // Make sure you have this CSS file or adjust styling

// This is the context provided to the chatbot about Sudeep
// The comprehensive knowledge base about Sudeep Aryan Gaddameedi
const aboutSudeep = `
### Contact Information
*   **Name**: Sudeep Aryan Gaddameedi
*   **Email**: sudeeparyang@gmail.com
*   **Phone**: 8309135484
*   **LinkedIn**: https://www.linkedin.com/in/sudeep-aryan/
*   **GitHub**: https://github.com/Sudeeparyan
*   **Portfolio**: https://sudeeparyan.github.io

### About Me
I am a modern tech polymath with 3+ years of experience in Generative AI, Python, DevOps, and Cloud Computing. I believe excelling in one area boosts my ability to transfer insights across fields. My real passion is building—taking ideas from 0 to 1 and scaling them to 100. While I'm not athletic, a great singer, or a dancer, I am laser-focused on designing ML models, optimizing DevOps pipelines, and driving breakthrough research in Generative AI.

I view building as a complete process: ideating, owning, executing, and scaling. I'm dedicated to continuous learning and leveraging my diverse skills to drive innovation.

### My Interests & Growth
I continuously fuel my curiosity by:
*   Attending tech conferences & startup summits to stay current and build connections.
*   Participating in hackathons to embrace rapid ideation and push my problem-solving skills.
*   Publishing research papers and technical posts to share insights with the developer community.
*   Connecting with founders and startups to explore ideas and engage with early-stage innovation.
*   Creating tech content through LinkedIn posts, YouTube tutorials, and blog articles.

### Technical Skills
*   **Artificial Intelligence:** RAG, Agentic Systems (MCP, A2A), Prompt Engineering, LangChain, LlamaIndex, Fine Tuning, TensorFlow, PyTorch, scikit-learn
*   **Programming Languages:** Python, JavaScript, C, C++
*   **Cloud Platforms:** Microsoft Azure, AWS (Basics), Google Cloud Platform
*   **Data Analytics & Tools:** Microsoft Fabric (Power BI, Data Engineering, Data Science, Data Factory, OneLake Data Hub), Firebase Studio
*   **DevOps Tools:** Docker, Kubernetes, CI/CD, Git, Prometheus, GitHub Actions, Jenkins
*   **Web Technologies:** React, Node.js, Next.js, Redux Toolkit, Polymer, HTML, CSS

### Experience

**Soliton Technologies | Senior Project Engineer**
*May 2025 - Present*
*   **AI R&D Leadership:** Designing advanced AI systems for intelligent hardware testing, publishing research papers, and presenting at AI conferences.
*   **Agent-Based Systems Architecture:** Implementing cutting-edge frameworks like the Agent Development Kit (ADK) and protocols like MCP and A2A to build scalable, interoperable multi-agent systems.
*   **Team Enablement & Mentorship:** Leading the integration of the latest AI techniques into enterprise workflows and mentoring junior engineers through a structured AI curriculum.

**Soliton Technologies | Project Engineer**
*June 2023 – May 2025*
*   **Project: Texas Instruments – AI Validation Platform:**
    *   Engineered an advanced AI chatbot to interpret complex datasheets and auto-generate test code for battery management systems, significantly improving validation accuracy.
    *   Solved critical performance bottlenecks by architecting a multi-region deployment using Docker and Kubernetes, slashing API latency from **300 seconds to under 10 seconds** (a 30x improvement).
    *   Collaborated directly with TI clients to gather requirements and developed a user-friendly GUI to streamline their validation workflows.

**Soliton Technologies | Internship**
*January 2022 - May 2023*
*   **Project: Intel – Device Vision Platform:**
    *   Developed a robust offline ML-powered GUI tool using supervised regression models. The tool assisted validation engineers in analyzing test data and predicting device performance, **reducing manual effort and domain dependency by 90%**.
    *   Led the migration of the entire solution to Microsoft Azure, designing and automating a full MLOps pipeline using Microsoft Fabric (OneLake, Data Factory, Power BI).

**Edureka | Full Stack Web Developer (Internship)**
*July 2021 - February 2022*
*   Built full-stack web applications using React for the frontend and Python for the backend, laying a strong technical foundation in API integration and scalable web architecture.

### Projects

**AI Academy | Co-Founder**
*November 2024 - Present | [Live Link](https://ai-academy-m8m2.onrender.com/)*
*   An online platform offering interactive courses, real-world projects, and mentorship to empower developers in AI.
*   **AI Notebook:** An AI-powered study assistant that analyzes academic content to provide interactive Q&A, data visualizations, and personalized recommendations. ([Live Link](https://studio--ai-notebook-for-bharat.us-central1.hosted.app/))
*   **AI Solution Builder:** A smart platform that guides developers in designing optimal AI application architectures, generating tailored suggestions and visual diagrams. ([Live Link](https://ai-solutionbuilder.onrender.com))
*   **AI Knowledge Base:** A centralized documentation hub for AI research, best practices, and reusable components. ([Live Link](https://ai-knowledgebase.onrender.com/))

**University & Personal Projects**
*   **Self-Driving Rover:** Built an autonomous rover using Raspberry Pi and a CNN model for lane-following and obstacle avoidance.
*   **Quadcopter:** Designed and built a stable, responsive drone capable of advanced maneuvers like flips and rotations.
*   **S-Cart & S-Movies:** Developed fully functional e-commerce prototypes using the MERN stack (MongoDB, Express, React, Node.js) to demonstrate modern web development practices.

### Publications

**RAG HUB - A Comprehensive Guide to Build an AI Architecture**
*   A question-driven framework to simplify AI architecture design, using dynamic filtering and decision-tree logic to guide developers.
*   **Link:** [Google Drive](https://drive.google.com/drive/folders/1QSbyl38QlabZq93nsQiqysdhzbHIBE_y)

**CNN based Curved Path Detection for Autonomous Rover**
*   An IEEE paper on an autonomous rover using a CNN model for real-time navigation.
*   **Link:** [IEEE Xplore](https://ieeexplore.ieee.org/document/10404782)

### Achievements
*   **Best Paper Award (2025):** Awarded Best Paper at the IEEE International AI Conference, selected from over 1,000 submissions.
*   **Innovator of the Year – Soliton:** Recognized for introducing cutting-edge AI techniques and leading transformative innovation across projects.

### Education
*   **Bachelor of Technology in Electrical and Electronics Engineering**
    *   Amrita Vishwa Vidyapeetham, Coimbatore | 2019 – 2023 | CGPA: 7.87

### Certifications
*   **Microsoft Certified:** Azure AI Fundamentals ([Credential](https://learn.microsoft.com/en-us/users/GaddameediSudeepAryan-0368/credentials/AE910C93A6319AC3))
*   **Machine Learning (Stanford):** [Coursera](https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8)
*   **Neural Networks and Deep Learning:** [Coursera](https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6)
*   **Full Stack Web Development:** [Edureka](https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db)
*   **AWS Cloud Practitioner Essentials:** [Certificate](https://drive.google.com/drive/folders/1_AvFOXMA3nCj6sC-qifi5zF_boVKCL3q)
*   **Google Professional Workspace Administrator:** [Coursera](https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245)

### Personal Details
*   **Languages:** Proficient in English, Telugu, Hindi, and Tamil.
*   **Hobbies:** Reading nonfiction books, playing kabaddi and volleyball, and going to the gym.
`;

// System instruction for the chatbot (this remains the same, but now references the comprehensive details)
const systemPrompt = `
You are a helpful and friendly AI assistant chatbot created by Sudeep Aryan Gaddameedi.
Your purpose is to answer questions about Sudeep based *only* on the detailed information provided below.
Do not make up any information. If a question is asked that cannot be answered using these details, politely state that you don't have that specific information about Sudeep.

Here are the complete details about Sudeep:
${aboutSudeep}
`;

export default function Chatbot() {
    // --- SECURITY WARNING ---
    // NEVER hardcode your API key in client-side JavaScript like this for production.
    // Anyone can view it in the browser's source code.
    // Use a backend proxy or serverless function to handle API calls securely.
    const API_KEY = "AIzaSyCJfqiVMk6PxcCKx4AbbNxxyZEvbT_MMcw"; // Replace with your actual API key ONLY for testing
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
            genAI = new GoogleGenerativeAI(API_KEY);
            model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash", // Using gemini-1.5-flash as gemini-2.5-flash might not be available yet. Adjust if needed.
                // --- Pass system instruction explicitly ---
                systemInstruction: {
                    role: "user", // Role might just need to be 'user' or 'model' depending on SDK/model
                    parts: [{ text: systemPrompt }],
                },
            });
        }
    catch (error) {
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
        const _messages = [...messages.slice(1), newUserMessage];

        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        const currentInput = messageInput; // Store input before clearing
        setMessageInput('');
        setIsLoading(true);

        try {
            // --- Prepare history for the API ---
            // Map roles and filter out any potential system messages if they were in state
            const historyForAPI = _messages
                .filter(msg => msg.role === 'user' || msg.role === 'assistant') // Only user/assistant messages
                .map(msg => ({
                    // Map 'assistant' role to 'model' for the API
                    role: msg.role === 'assistant' ? 'model' : msg.role,
                    parts: [{ text: msg.content }]
                }));
                console.log(historyForAPI)
            // --- Use startChat for conversation context ---
            const chat = model.startChat({
                history: historyForAPI,
                
                generationConfig: {
                    maxOutputTokens: 1000, // Adjust as needed
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
            console.log("API_KEY",API_KEY)
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