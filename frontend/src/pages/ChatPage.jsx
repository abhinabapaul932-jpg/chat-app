import { useChatStore } from "../store/useChatStore";
import ChatsList from "../components/ChatsList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const { selectedUser, user, logout } = useChatStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center pt-20 px-4">
      
      <div className="bg-slate-800 w-full max-w-6xl h-[calc(100vh-8rem)] rounded-2xl shadow-xl overflow-hidden border border-slate-700 flex flex-col">
        
        {/* HEADER WITH USER AND LOGOUT */}
        <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-3">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user?.username}
                className="size-10 rounded-full object-cover"
              />
            ) : (
              <div className="size-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold">
                  {user?.username?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-white">{user?.username || "User"}</p>
              <p className="text-xs text-slate-400">{user?.email || "user@example.com"}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
            title="Logout"
          >
            <LogOut className="size-5 text-slate-400 group-hover:text-cyan-400" />
          </button>
        </div>

        {/* MAIN CHAT AREA */}
        <div className="flex-1 flex">
          {/* SIDEBAR LOGIC */}
          <div className={`
              border-r border-slate-700 flex-col h-full transition-all duration-200
              w-full md:w-80 
              ${selectedUser ? "hidden" : "flex"} 
              md:flex
          `}>
              <div className="p-5 border-b border-slate-700">
                  <h1 className="text-xl font-bold text-white">Messages</h1>
              </div>
              
              <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                 <ChatsList />
              </div>
          </div>

          {/* CHAT AREA LOGIC */}
          <div className={`
              flex-1 flex-col min-w-0 bg-slate-900/50
              ${!selectedUser ? "hidden" : "flex"} 
              md:flex
          `}>
             {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;