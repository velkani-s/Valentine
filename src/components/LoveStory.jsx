import emailjs from "@emailjs/browser";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./LoveStory.css";

function LoveStory() {
  const navigate = useNavigate();
  const [story, setStory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          story: story,
        },
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          alert("Story sent to my heart 💕 (Email Sent!)");
          setStory("");
        },
        (error) => {
          alert("Oops something failed 😢");
          console.log(error);
        },
      );
  };

  return (
    <section className="love-story-page">
      {/* Header with back button */}
      <div className="story-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Back
          </button>
          <h1 className="story-title">
            Our Love Story <span className="heart">❤️</span>
          </h1>
          <p className="story-subtitle">Our Journey Together</p>
        </div>
      </div>

      {/* Story Content */}
      <div className="story-content container">
        <div className="timeline">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>The Beginning</h3>
              <p>
                I’ll never forget the day we met. It felt like the whole world
                stopped for a second. Right then, I knew you were the person I
                had been waiting for. Every small detail of that moment is still
                clear in my mind. It was more than just a lucky day; it was love
                at first sight, and I knew my life had changed forever.
              </p>
              <span className="timeline-date">2021</span>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Growing Closer</h3>
              <p>
                As days turned into weeks and weeks into months, we grew closer
                with every laugh, every conversation, and every moment we
                shared. You became my best friend, my confidant, and my greatest
                love.
              </p>
              <span className="timeline-date">2023</span>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Forever with You</h3>
              <p>
                Today, I stand here knowing that I want to spend the rest of my
                life with you. Not because I have to, but because I choose to.
                Every single day, I choose you. English puriyalena sollu, but I
                promise to love you in every language, in every way possible.
                You are my forever, and I can’t wait to see what the future
                holds for us.
              </p>
              <span className="timeline-date">Forever</span>
            </div>
          </div>
        </div>

        {/* Story Form Section */}
        <div className="story-form-section">
          <h2>
            Add Your Story <span className="heart-icon">💕</span>
          </h2>
          <form className="story-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="yourName">Your Story</label>
              <textarea
                id="yourStory"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Tell your unique love story..."
                rows="8"
                className="story-input"
              />
            </div>
            <button type="submit" className="btn btn-submit">
              Save Our Story ❤️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoveStory;
