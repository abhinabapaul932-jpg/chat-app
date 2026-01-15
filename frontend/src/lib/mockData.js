export const USERS = [
  {
    id: "1",
    username: "john_doe",
    fullName: "John Doe",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  {
    id: "2",
    username: "jane_smith",
    fullName: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  },
  {
    id: "3",
    username: "alex_johnson",
    fullName: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  },
  {
    id: "4",
    username: "sarah_williams",
    fullName: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
];

export const MOCK_MESSAGES = [
  {
    id: "1",
    senderId: "1",
    text: "Hey! How are you doing?",
    timestamp: new Date(Date.now() - 5 * 60000),
  },
  {
    id: "2",
    senderId: "me",
    text: "I'm doing great, thanks for asking!",
    timestamp: new Date(Date.now() - 4 * 60000),
  },
  {
    id: "3",
    senderId: "1",
    text: "That's awesome! Want to grab coffee later?",
    timestamp: new Date(Date.now() - 3 * 60000),
  },
  {
    id: "4",
    senderId: "me",
    text: "Sure! What time works for you?",
    timestamp: new Date(Date.now() - 2 * 60000),
  },
];
