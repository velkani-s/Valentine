import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import romanticBGM from "./assets/romantic-bgm.mp3";
import clickSound from "./assets/click-sound.mp3";
import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const bgm = new Audio(romanticBGM);
bgm.loop = true;
bgm.volume = 0.5;
bgm.play();

document.addEventListener("click", () => {
  const clickAudio = new Audio(clickSound);
  clickAudio.play();
});

<BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      }
    />
  </Routes>
</BrowserRouter>
