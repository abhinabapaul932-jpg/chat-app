import { MessageSquare } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900/50 text-center">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center animate-bounce">
            <MessageSquare className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mt-4">Welcome to Chathub!</h2>
        <p className="text-slate-400 mt-2">
            Select a conversation from the sidebar to start chatting.
        </p>
    </div>
  );
};

export default NoConversationPlaceholder;