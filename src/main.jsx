import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Store audio assets globally (no autoplay here)
window.audioAssets = {
  bgm: null,
  clickSound: null,
  audioStarted: false,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// Initialize audio on first user interaction
const initializeAudio = () => {
  if (window.audioAssets.audioStarted) return;

  window.audioAssets.audioStarted = true;

  // Load and play background music
  import("./assets/romantic-bgm.mp3").then((module) => {
    const bgm = new Audio(module.default);
    bgm.loop = true;
    bgm.volume = 0.5;
    bgm.play().catch((err) => console.log("BGM autoplay prevented:", err));
    window.audioAssets.bgm = bgm;
  });

  // Load click sound
  import("./assets/click-sound.mp3").then((module) => {
    window.audioAssets.clickSound = module.default;
  });
};

// Start audio on first click
document.addEventListener(
  "click",
  () => {
    initializeAudio();

    // Play click sound
    if (window.audioAssets.clickSound && window.audioAssets.audioStarted) {
      const clickAudio = new Audio(window.audioAssets.clickSound);
      clickAudio
        .play()
        .catch((err) => console.log("Click sound prevented:", err));
    }
  },
  { once: false },
  true,
);
