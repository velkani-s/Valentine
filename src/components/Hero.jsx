import { useNavigate } from "react-router-dom";
import "./Hero.css";
// import MeeRaaji from "../assets/MeRaaji.jpeg";
import Bus from "../assets/Bus.jpg";
function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
           My Valentine RaajiKuttyy <span className="heart">❤️</span>
        </h1>
        <h2 className="hero-subtitle">Happy Valentine's Day, My Love</h2>
        <p className="hero-description">
          Every moment with you is my favorite love story di urundaa.
        </p>
        <button
          className="btn btn-primary hero-btn"
          onClick={() => navigate("/love-story")}
        >
          Our Love Story ❤️
        </button>
      </div>
      <div className="hero-image">
        <img
          src={Bus}
          alt={"Me and Raaji"}
          className="profile-pic"
        />
      </div>
    </section>
  );
}

export default Hero;
