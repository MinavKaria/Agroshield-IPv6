// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import CaptureImage from './components/camera/CaptureImage';
import Profile from './components/Profile/Profile';
import ChatPage from './components/Chatpage/ChatPage';
import ResultPage from './components/ResultPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './actions/context';
import './i18n';
import AI from './components/AI';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="1093237686281-d74iebn0g6r41qk6l7tcb51irsgbv45l.apps.googleusercontent.com">
    <CartProvider>
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/captureimage" element={<CaptureImage />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<ResultPage />} />
          <Route path="/ai" element={<AI/>} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
