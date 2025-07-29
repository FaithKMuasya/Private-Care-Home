import Slider from "react-slick";
import "./our-home.css"; // link to the custom CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";





function AppSection() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: img2,
      title: "1. Modern Kitchen & Dining Comfort",
      text: <p>Step into a cozy and well-equipped kitchen space where functionality meets charm.
         From the sleek fridge and cooker to the elegant dining set and tasteful wall art, every corner invites comfort and warmth.
          Sunlight filters through soft curtains, creating the perfect atmosphere for shared meals and joyful moments.
          </p>,
      buttonText: "🍽️ Chef’s Corner",
    },
    {
      image: img3,
      title: "2. Entertainment Lounge",
      text: <p>Unwind in our cozy entertainment room, where wooden floors meet plush seating and your favorite shows come to life on the big screen.
         Whether it's movie night or a casual afternoon with friends, the ambiance is always just right —
          with a breeze from the ceiling fan to top it all off.
          </p>,
      buttonText: "🍿 Showtime",

    },
    {
      image: img4,
      title: "3.  Cozy Living Passage",
      text: <p>A beautifully lit space leading to the bathroom, with soft ceiling lights, a comfy seating area, and a refreshing touch of greenery. 
        This welcoming pathway blends warmth, elegance, and nature—perfect for relaxed living.
        </p>,
      buttonText: "✨ Just Passing",

    },
    {
      image: img5,
      title: "4. The Chimney Corner",
      text: <p>Tucked quietly into the corner, this charming nook brings warmth and personality to the space.
         The chimney-like feature, accented with curated decor and a soft touch of greenery, feels like a quiet retreat within the home — 
         perfect for curling up with a book, reflecting, or simply enjoying the comfort of being indoors. 
         It’s not just a corner — it’s character.
         </p>,
      buttonText: "🔥 Little Moments",

    },
    {
      image: img9,
      title: "5.  A Homely Living Touch",
      text: <p>A broader view into our heartwarming living area — 
        where every detail, from the inviting seats to the greenery and thoughtful decor, speaks of warmth and home.
         The cozy chimney corner and soft lighting wrap it all in comfort and charm.
         </p>,
      buttonText: "🛋️ Roomy Vibes",

    },
    {
      image: img7,
      title: "5. Tranquil Outdoors",
      text: <p>Step outside into a serene and thoughtfully designed compound where elegance meets nature. 
        The clean pathways, manicured grass, and beautifully arranged trees create a peaceful ambiance.
         From the quality finishes of the house to the well-grounded compound, every element speaks of care and class.
         </p>,
      buttonText: "🌿 Nature’s Touch",

    },

    {
      image: img8,
      title: "6. The Sleep Sanctuary",
      text: <p>
        Tucked within the heart of the home, this bedroom whispers calm and quiet elegance. 
        Twin beds, perfectly spread with soft linen and cloud-like pillows, invite rest without saying a word. 
        The gentle play of natural light across the sheets adds a lived-in warmth, while a shared nightstand cradles a lamp that glows like a hush.
         Every detail — from the smooth corners of the duvet to the thoughtful simplicity of the layout — speaks of comfort, care, and a space made to exhale in.
          It’s not just a bedroom — it’s a breath of peace.
         </p>,
      buttonText: "🛏️  Explore Comfort",

    },
  ];

  return (
    <section className="app-section" id="our beautiful home">
      <div className="container">
        <h2 className="section-heading">
          A Glimpse Into Our Tranquil Spaces
        </h2>
        <Slider {...sliderSettings}>
          {slides.map((slide, i) => (
            <div key={i}>
              <div className="slide">
                <div className="slide-card">
                  <div className="slide-image">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                  <div className="slide-content">
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                     <div className="slide-static-button">{slide.buttonText}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AppSection;
