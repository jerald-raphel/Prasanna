import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Send } from "lucide-react";

const quickReplies = [
  "Tell me about Golden Grove",
  "What plots are available?",
  "I want to book a site visit",
  "What are the price details?",
];

const FloatingButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! 👋 Welcome to Pressana Infra. I can help you learn about our premium residential plots. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    const msg = text || input;
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setInput("");

    setTimeout(() => {
      let reply = "Thank you for your interest! Our team will get in touch with you shortly. You can also call us at +91 98765 43210 for immediate assistance.";
      if (msg.toLowerCase().includes("golden grove")) {
        reply = "Golden Grove offers premium villa plots starting from 14 cents with 65ft frontage. It features landscaped gardens, 24/7 security, and RERA-approved layouts. Would you like to book a site visit?";
      } else if (msg.toLowerCase().includes("grand vista")) {
        reply = "Grand Vista features expansive plots starting from 10 cents with highway access and panoramic views. It includes a central park, sports arena, and underground cabling. Shall I arrange a visit?";
      } else if (msg.toLowerCase().includes("urban cloud")) {
        reply = "Urban Cloud is our smart living project in the IT corridor. Plots start from 8 cents with smart gates, EV charging, and solar power. Want to know more?";
      } else if (msg.toLowerCase().includes("price") || msg.toLowerCase().includes("cost")) {
        reply = "Our plots range from ₹25 Lakhs to ₹1.5 Crores depending on the project and plot size. Would you like a detailed price list for a specific project?";
      } else if (msg.toLowerCase().includes("visit") || msg.toLowerCase().includes("book")) {
        reply = "Great! I'd love to help you book a site visit. Please call us at +91 98765 43210 or fill out the enquiry form on our website. Our team will schedule a convenient time for you!";
      } else if (msg.toLowerCase().includes("available") || msg.toLowerCase().includes("plot")) {
        reply = "We have plots available across all three projects — Golden Grove, Grand Vista, and Urban Cloud. Each offers different sizes and locations. Which project interests you?";
      }
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-[340px] sm:w-[380px] h-[480px] glass-card rounded-2xl overflow-hidden flex flex-col border border-primary/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-primary/20 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground">Pressana Assistant</h4>
                  <p className="text-xs text-primary">● Online</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="cursor-hover text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border border-border text-foreground rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="cursor-hover text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend("")}
                placeholder="Type a message..."
                className="cursor-hover flex-1 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSend("")}
                className="cursor-hover w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        {/* Call Button */}
        <motion.a
          href="tel:+919876543210"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-hover w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_4px_20px_hsl(152_80%_28%/0.4)] hover:shadow-[0_4px_30px_hsl(152_80%_28%/0.6)] transition-shadow"
        >
          <Phone className="w-6 h-6" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-hover w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;
