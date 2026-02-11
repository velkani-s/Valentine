import "./Message.css";

function Message() {
  return (
    <section className="message-section">
      <div className="message">
        <div className="container">
          <div className="message-header">
            <h2 className="message-headline">
              You are my today, my tomorrow, and my forever{" "}
              <span className="heart-icon">💕</span>
            </h2>
            <button className="btn btn-message">
              A Message Just for You <span>❤️</span>
            </button>
          </div>

          <div className="letter-container">
            <div className="letter">
              <div className="letter-header">
                <h3>A Message Just for You</h3>
              </div>
              <div className="letter-content">
                <p>
                  <span className="salutation">My love,</span>
                </p>

                <p>You are the best thing that ever happened to me.</p>

                <p>Thank you for your love, your patience, and your smile.</p>

                <p>I promise to choose you every single day.</p>

                <div className="signature">
                  <p className="signature-text">
                    Happy Valentine's Day <span className="heart">❤️</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Message;
