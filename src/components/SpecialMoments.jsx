import "./SpecialMoments.css";
import FirstDate from "../assets/firstDate.jpg";
import SEcstory from "../assets/SecStory.jpg";
import Bday from "../assets/Bday.jpg";
import StreetPic from "../assets/StreetP.jpg";
import Yoo from "../assets/Yoo.jpg";
import Bus2 from "../assets/bus2.jpg";
import Butterfly from "../assets/butterfly.jpg";
import Favor from "../assets/Favo.jpg";
function SpecialMoments() {
  const moments = [
    {
      id: 1,
      title: "Our First Date",
      description:
        "First Date Mahal poyirundhom do you remember, it was our first instagram story too 🤣💕.",
      emoji: "🎁😂💖",
      image: FirstDate,
    },
    {
      id: 2,
      title: "College la First story",
      description:
        "Idhula evlo comedy aah irukken paaru di kunduu 😂.",
      emoji: "😎😪😝",
      image: SEcstory,
    },
    {
      id: 3,
      title: "Birthday phottooo 😂",
      description:
        "by the way Advance happyyy birthday dii kunduu!",
      emoji: "🍰😻💌",
      image: Bday,
    },
    {
      id: 4,
      title: "Road la irundhu selfie 😂",
      description:
        "Street la irundhu selfie eduthom, annaikki enna function guess pannuuu",
      emoji: "💕🥰",
      image: StreetPic,
    },
    {
      id: 5,
      title: "Yooo Yooo",
      description:
        "Rapper style selfie",
      emoji: "🎧🎙️💕",
      image: Yoo,
    },
    {
      id: 6,
      title: "Bus ridinggggg",
      description:
        "Riding with Kunduuu ",
      emoji: "🚌😎💖",
      image:Bus2,
    },
    {
      id: 7,
      title: "Butterfly moment",
      description:
        "Butterfly moment with Kunduuu ",
      emoji: "🦋💕",
      image:Butterfly,
    },
    {
      id: 8,
      title: "Favourite moment",
      description:
        "Favourite moment di Urundaaa ",
      emoji: "💕❤️",
      image:Favor,
    },
   
  ];

  return (
    <section className="special-moments">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="heart-icon">💗</span> Our Special Moments{" "}
            <span className="heart-icon">💝</span>
          </h2>
        </div>
        <div className="moments-grid">
          {moments.map((moment) => (
            <div key={moment.id} className="moment-card">
              <div className="card-image">
                <img
                  src={moment.image}
                  alt={moment.title}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{moment.title}</h3>
                <p className="card-description">{moment.description}</p>
                {/* <button className="btn btn-read-more">Read More</button> */}
                <span>{moment.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialMoments;
