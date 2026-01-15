import { useChatStore } from "../store/useChatStore";
import { Users } from "lucide-react";

const ChatsList = () => {
  const { users, selectedUser, setSelectedUser } = useChatStore();

  return (
    <div className="flex-1 overflow-y-auto w-full p-3">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 px-2">
        <Users className="size-5 text-slate-400" />
        <span className="font-medium text-slate-400">Contacts</span>
      </div>

      {/* List of Users */}
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => setSelectedUser(user)}
          className={`
            w-full p-3 flex items-center gap-3 rounded-lg transition-colors mb-1
            ${selectedUser?.id === user.id ? "bg-cyan-500/10 border border-cyan-500/20" : "hover:bg-slate-800"}
          `}
        >
          {/* Avatar */}
          <img
            src={user.avatar}
            alt={user.fullName}
            className="size-10 rounded-full object-cover"
          />

          {/* User Info */}
          <div className="text-left">
            <h3 className={`font-medium ${selectedUser?.id === user.id ? "text-cyan-400" : "text-white"}`}>
              {user.fullName}
            </h3>
            <p className="text-xs text-slate-500">Offline</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatsList;