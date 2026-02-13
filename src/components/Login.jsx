import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css"; // We will create this next

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const success = await login(username, password);
      if (success) {
        navigate("/home", { replace: true });
      } else {
        setError("That's not the right code, My Love! ❌");
      }
    } catch (err) {
      setError("Something went wrong with our heart's server 💫");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Floating Hearts Background (Optional CSS particles) */}
      <div className="heart-bg"></div>

      <div className="login-card">
        <div className="login-header">
          <span className="main-heart">💝</span>
          <h1>Hello RaajiKuttyy!</h1>
          <p>Enter our secret code to unlock my heart</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              placeholder="Your Name (Velkani)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Secret Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Opening Memories..." : "Enter Our World ❤️"}
          </button>

          {error && <div className="error-bubble">{error}</div>}
        </form>

        <p className="login-footer">Always Yours, Your Urundaa 💖</p>
      </div>
    </div>
  );
}

export default Login;