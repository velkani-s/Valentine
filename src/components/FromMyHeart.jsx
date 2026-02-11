  import "./FromMyHeart.css";
  import Thanks from "../assets/thank.jpg";
  import Auto from "../assets/auto.jpg";
  import Pongal from "../assets/ponga.jpg";
  import Enga from "../assets/enga.jpg";
  function FromMyHeart() {
    const photos = [
      {
        id: 1,
        title: "The day my heart chose you",
        emoji: "💕❤️",
        image: Thanks,
      },
      {
        id: 2,
        title: "Adventure with you",
       image: Auto,
      },
      {
        id: 3,
        title: "Together forever",
        image: Pongal,

      },
      {
        id: 4,
        title: "Love and laughter",
        image: Enga,
      },
    ];

    return (
      <section className="from-my-heart">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="heart-icon">💕</span> From My Heart{" "}
              <span className="gift-icon">🎁</span>
            </h2>
          </div>
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="gallery-image"
                  />
                  <div className="overlay"></div>
                  <div className="gallery-title">{photo.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default FromMyHeart;
