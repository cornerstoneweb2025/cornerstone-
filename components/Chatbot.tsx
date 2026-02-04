import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize AI with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Welcome to Cornerstone Web. I am your digital concierge. How may I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: userText };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare the conversation history for the API
      // We map our internal message structure to the API's expected format
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // System instruction to define the persona
      const systemInstruction = `You are the elite AI concierge for Cornerstone Web, a premium digital marketing agency.
      Your tone is sophisticated, professional, and helpful. You speak with brevity and elegance.
      
      Services we offer:
      1. Web Development (React, Next.js, High Performance)
      2. App Development (iOS, Android, Cross-platform)
      3. Digital Marketing (PPC, Strategy)
      4. Social Media Management
      5. UI/UX Design
      6. SEO & Performance
      
      Guidelines:
      - Answer questions about our services enthusiastically.
      - If asked about pricing, politely explain that we offer bespoke solutions and suggest they use the "Inquire" form for a quote.
      - Do not answer general knowledge questions unrelated to web, tech, business, or design. politely steer back to Cornerstone Web.
      - Keep responses relatively short (under 3 sentences) unless explaining a technical concept.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...history,
            { role: 'user', parts: [{ text: userText }] }
        ],
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const aiText = response.text || "I apologize, but I am unable to formulate a response at this moment.";

      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'model', text: aiText };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "I apologize, but I am currently experiencing a connection issue. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
        {/* Toggle Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(197,160,40,0.3)] transition-all duration-300 flex items-center justify-center ${
                isOpen 
                ? 'rotate-90 bg-luxury-charcoal text-white border border-white/10' 
                : 'bg-gold-500 text-luxury-black hover:bg-gold-400 hover:scale-110'
            }`}
            aria-label="Toggle Chat"
        >
            {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>

        {/* Chat Window */}
        <div 
            className={`fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] bg-luxury-black border border-gold-500/30 rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
                isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
            }`} 
            style={{ maxHeight: '600px', height: '60vh' }}
        >
            
            {/* Header */}
            <div className="bg-luxury-dark/95 backdrop-blur-sm p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* CW Logo Box Removed */}
                    <div>
                        <h3 className="text-white font-serif font-bold text-sm tracking-wide">Concierge</h3>
                        <span className="text-[10px] text-gold-500/80 uppercase tracking-widest">Always Online</span>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                    <Minimize2 className="w-4 h-4" />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-luxury-black to-luxury-charcoal scrollbar-thin scrollbar-thumb-gold-500/20 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                            ? 'bg-gold-500 text-luxury-black rounded-tr-none font-medium' 
                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none backdrop-blur-sm'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start animate-fade-in">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-luxury-dark border-t border-white/10">
                <div className="relative group">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your inquiry..."
                        className="w-full bg-luxury-black border border-white/10 rounded-lg py-3.5 pl-4 pr-12 text-white text-sm focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 focus:outline-none transition-all placeholder:text-gray-600"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gold-500 hover:text-white hover:bg-gold-500/10 rounded-md disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Chatbot;