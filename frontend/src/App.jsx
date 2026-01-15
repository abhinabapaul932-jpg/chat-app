import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useChatStore } from './store/useChatStore'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useChatStore();
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return element;
};

const App = () => {
  const { initAuth } = useChatStore();

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-5 overflow-hidden">

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<ChatPage />} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

    </div>
  )
}

export default App

