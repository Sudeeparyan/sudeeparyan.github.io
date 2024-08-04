import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';

const aboutme = `
Sudeep Aryan Gaddameedi is a tech enthusiast with 2 years of experience in DevOps, Machine Learning, Generative AI, and VLSI. As a Project Engineer at Soliton Technologies since June 2023, he has been working on hardware testing, developing chip modules, and creating an AI assistant chatbot for Texas Instruments. Previously, he was a Machine Learning Engineer in the Device Vision Project. He interned at Soliton Technologies from June 2022 to May 2023, where he developed skills in DevOps tools and full-stack development, completing projects like a weather application and Timely. Sudeep's projects include working on a Battery Management System for Texas Instruments, developing a data analysis tool for Intel, and building a quadcopter. He has certifications in Machine Learning, IoT, Neural Networks, Google Workspace Administration, Full Stack Web Development, and AWS. Sudeep holds a Bachelor of Technology from Amrita Vishwa Vidyapeetham with a CGPA of 7.89, and has published an IEEE paper on CNN-based Curved Path Detection and Obstacle Avoidance for an autonomous rover. His technical skills encompass Python, JavaScript, C, C++, AI, DevOps tools, web technologies, cloud platforms, and microcontrollers. Proficient in English, Telugu, Hindi, and Tamil, Sudeep enjoys reading nonfiction, playing kabaddi and volleyball, and going to the gym. He can be reached at sudeeparyang@gmail.com and 8309135484. His portfolio and professional profiles are available on website, GitHub, and LinkedIn.
`;
const systemPrompt =`
You are an helpful chatbot who answers questions regardig Sudeep

Details about Sudeep
${aboutme}
`

export default function Chatbot() {
  const API_KEY = "AIzaSyBJSX_Hv8vBOd4e4FHBBvRAcSNSnwYR_F0";
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
        role: 'system',
        content: systemPrompt
      },
    {
      role: 'assistant',
      content: 'How can I help you?'
    }
  ]);

  // Initialize the Gemini API
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }];
    setMessages(newMessages);
    setMessageInput('');

    // Use the Gemini API to generate a response
    console.log(newMessages)
    const result = await model.generateContent(messageInput, { context: newMessages });
    const response = await result.response;
    const apiMessage = await response.text();

    setMessages([...newMessages, { role: 'assistant', content: apiMessage }]);
  };

  return (
    <div>
      <section className="chatbot container">
        <h2 className="headline ">
          Chatbot
        </h2>
        <div className="chatbot-blue">
          <div className="chat-info">
            <h3>AI Chatbot</h3>
            <p>I have put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I have done.</p>
            <p>You can also download my resume here if you want to take a look at it. I am currently looking for new opportunities so if you have a project you think I did be a good fit for, please get in touch!</p>
            <a href="/Sudeep_Aryan_Resume.pdf" className="button black" download>Download Resume</a>
          </div>
          <div className="chat-box">
            <div className="scroll-area">
              <ul id="chat-log">
                {messages.filter((message,index)=>message.role!='system').map((message, index) => (
                  <li key={index} className={`${message.role}`}>
                    <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                    <div className="message">{message.content}</div>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={submitForm} className="chat-message">
              <input type="text" placeholder="Hey Sudeep, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
              <button className="button black">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}