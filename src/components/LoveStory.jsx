import { useNavigate } from "react-router-dom";
import "./LoveStory.css";

function LoveStory() {
  const navigate = useNavigate();

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
                Our love story started with a moment we'll never forget. It was
                meant to be, and from that very first moment, I knew you were
                the one. Every detail of that day is etched in my heart forever.
              </p>
              <span className="timeline-date">2024</span>
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
              <span className="timeline-date">2025</span>
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
                Every single day, I choose you.
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
          <form className="story-form">
            <div className="form-group">
              <label htmlFor="yourName">Your Story</label>
              <textarea
                id="yourStory"
                placeholder="Tell your unique love story... Share the moments that matter to you most..."
                rows="8"
                className="story-input"
              ></textarea>
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
