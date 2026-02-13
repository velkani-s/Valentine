import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import SpecialMoments from "./components/SpecialMoments";
import FromMyHeart from "./components/FromMyHeart";
import Message from "./components/Message";
import LoveStory from "./components/LoveStory";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public login route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <div className="app">
              <Hero />
              <SpecialMoments />
              <FromMyHeart />
              <Message />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/love-story"
        element={
          <ProtectedRoute>
            <LoveStory />
          </ProtectedRoute>
        }
      />

      {/* Catch-all: redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
