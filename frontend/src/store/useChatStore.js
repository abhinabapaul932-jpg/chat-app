import { create } from "zustand";
import { USERS, MOCK_MESSAGES } from "../lib/mockData";

export const useChatStore = create((set) => ({
  // Auth
  user: null,
  isLoggedIn: false,
  isAuthLoading: false,

  // Chat
  messages: MOCK_MESSAGES,
  users: USERS,
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  // Auth Actions
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  logout: () => set({ user: null, isLoggedIn: false, messages: [], selectedUser: null }),
  
  // Chat Actions
  getUsers: () => set({ users: USERS }),
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  
  // Message Actions
  sendMessage: (text) => set((state) => ({
    messages: [...state.messages, { 
      id: Date.now().toString(), 
      senderId: "me", 
      text,
      timestamp: new Date()
    }]
  })),

  // Initialize user from localStorage
  initAuth: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        set({ user, isLoggedIn: true });
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("user");
      }
    }
  },
}));