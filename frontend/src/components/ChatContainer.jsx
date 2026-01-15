import { useState, useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { Send, X } from "lucide-react";

const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage } = useChatStore();
  const [text, setText] = useState("");

  // Ref for auto-scrolling to bottom
  const messagesEndRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-900/50 backdrop-blur-lg">

      {/* 1. CHAT HEADER */}
      <div className="p-4 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.fullName}
            className="size-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-white">{selectedUser.fullName}</h3>
            <p className="text-xs text-slate-400">Online</p>
          </div>
        </div>

        {/* Close Button (Mobile friendly) */}
        <button onClick={() => setSelectedUser(null)} className="p-2 hover:bg-slate-800 rounded-full">
          <X className="size-5 text-slate-400" />
        </button>
      </div>

      {/* 2. MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.senderId === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-[70%] rounded-2xl p-3 shadow-sm
                ${msg.senderId === "me"
                  ? "bg-cyan-600 text-white rounded-br-none"
                  : "bg-slate-800 text-slate-100 rounded-bl-none"}
              `}
            >
              <p>{msg.text}</p>
              <span className="text-[10px] opacity-50 mt-1 block text-right">
                12:00 PM
              </span>
            </div>
          </div>
        ))}
        {/* Invisible div to auto-scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* 3. INPUT AREA */}
      <div className="p-4 border-t border-slate-700 bg-slate-900/50">
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            className="flex-1 bg-slate-800 border-none rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-lg text-white transition-colors disabled:opacity-50"
            disabled={!text.trim()}
          >
            <Send className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;