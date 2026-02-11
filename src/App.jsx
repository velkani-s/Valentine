import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SpecialMoments from "./components/SpecialMoments";
import FromMyHeart from "./components/FromMyHeart";
import Message from "./components/Message";
import LoveStory from "./components/LoveStory";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Hero />
              <SpecialMoments />
              <FromMyHeart />
              <Message />
            </div>
          }
        />
        <Route path="/love-story" element={<LoveStory />} />
      </Routes>
    </Router>
  );
}

export default App;
