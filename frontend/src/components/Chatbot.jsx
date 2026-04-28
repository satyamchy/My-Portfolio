import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, SKILLS_DATA, EXPERIENCE_DATA, EDUCATION_CERTS_DATA, PROJECTS_DATA } from '../data';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', content: `Hello! I am ${HERO_DATA.name.split(" ")[0]}'s AI Assistant. Ask me anything about his skills, experience, or projects to see if he's a fit for your role!` }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Strips out non-useful or circular data before sending to the backend
    const getCleanContext = () => {
        const cleanSkills = SKILLS_DATA.map(({ icon, color, ...rest }) => rest);
        const cleanProjects = PROJECTS_DATA.map(({ image, ...rest }) => rest);

        return JSON.stringify({
            portfolio_owner: HERO_DATA,
            about: ABOUT_DATA,
            skills: cleanSkills,
            experience: EXPERIENCE_DATA,
            education: EDUCATION_CERTS_DATA,
            projects: cleanProjects
        });
    };

    const handleSend = async (e) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        const newMessages = [...messages, { role: 'user', content: userMsg }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            // Replace this specific URL with your actual backend URL or use import.meta.env.VITE_API_URL
            const API_URL = import.meta.env.VITE_AI_API_URL || 'http://127.0.0.1:8000/api';

            // We use a try-catch for the fetch in case the backend isn't set up yet.
            const response = await fetch(API_URL + '/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg,
                    history: newMessages,
                    portfolioContext: getCleanContext()
                })
            });

            // if (!response.ok) {
            //     throw new Error("Backend not responding correctly.");
            // }
              if (!response.ok) {
        // Capture backend status error
        throw new Error(
            `Backend responded with status ${response.status} ${response.statusText}`
        );
    }

            const data = await response.json();
            console.log("Chatbot Response:", data);
            setMessages((prev) => [...prev, { role: 'ai', content: data.reply }]);

        } catch (error) {
            console.error("Chatbot Error:", error);
            // Fallback mock response for testing before backend is fully integrated
             let errorMessage = "My backend connection is currently unavailable.";

            // More realistic user-facing messages
            if (error.message.includes("Failed to fetch")) {
                errorMessage =
                    "Unable to connect to backend server. It may be sleeping or not started yet. Free hosting instances often take 30–60 seconds to wake up.";
            } else if (error.message.includes("status")) {
                errorMessage = error.message;
            } else {
                errorMessage = `Unexpected error: ${error.message}`;
            }

            setTimeout(() => {
                setMessages((prev) => [...prev, {
                    role: 'ai',
                    content: "My backend connection is currently being set up! Once connected, I will read all of Satyam's data to answer your question perfectly."
                }]);
                setIsLoading(false);
            }, 1000);
            return; // prevent setting isLoading false twice
        }

        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">

            {/* Expanded Chat Window */}
            <div className={`transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-0 opacity-0 h-0 w-0 mb-0 pointer-events-none'}`}>
                <div className="glass w-[350px] sm:w-[400px] h-[500px] max-h-[70vh] rounded-2xl flex flex-col border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-900/95 backdrop-blur-xl">

                    {/* Header */}
                    <div className="bg-slate-800/80 p-4 border-b border-slate-700/50 flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-400 relative">
                                <Sparkles size={18} />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-emerald-400"></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-100 text-sm">Recruiter AI</h3>
                                <p className="text-xs text-emerald-400 font-medium">Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-200 transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                                <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-sky-500/20 text-sky-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-sky-500 text-slate-950 rounded-tr-sm' : 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700/50'}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-3 max-w-[85%] self-start">
                                <div className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-400">
                                    <Bot size={16} />
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-800 text-slate-400 rounded-tl-sm border border-slate-700/50 flex items-center justify-center">
                                    <Loader2 size={16} className="animate-spin" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-4 bg-slate-800/40 border-t border-slate-700/50 shrink-0">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about my experience..."
                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-full py-3 pl-4 pr-12 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 p-2 bg-emerald-500 text-slate-900 rounded-full hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-colors"
                            >
                                <Send size={16} className={input.trim() && !isLoading ? 'transform translate-x-0.5 -translate-y-0.5' : ''} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative group flex items-center justify-center h-14 w-14 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 z-50 ${isOpen ? 'bg-slate-800 text-slate-200 border border-slate-700/50' : 'bg-emerald-500 text-slate-900'}`}
            >
                {isOpen ? <X size={24} className="transform group-hover:rotate-90 transition-transform duration-300" /> : (
                    <>
                        <MessageSquare size={24} className="transform group-hover:-translate-y-0.5 transition-transform duration-300" />
                        <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-slate-900 animate-pulse"></span>
                    </>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
