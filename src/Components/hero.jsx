import React from "react";
import "./hero.css";
import { FaUserNurse, FaHome, FaClipboardList } from "react-icons/fa";

const Hero = () => (
  <section id="home" className="hero">
    <div className="heroOverlay">
      <div className="heroContainer">

        <div className="heroLeft">
          <h1 className="heroTitle">Welcome to Sunflower Sunrays</h1>
          <p className="heroSubtitle">Brightening lives one ray at a time</p>
        </div>

        <div className="heroTextRow">
          <div className="heroParagraph">
            <p className="heroText">
              At Sunflower Sunrays, we open our doors with heart and purpose to provide a warm, family style home where people are celebrated, cared for, and deeply respected.
              Sunflower Sunrays offers personalized, high quality assisted living in a peaceful and uplifting environment. Here, every resident is more than a guest, they are part of our extended family, each with a lifetime of stories, wisdom, and joy to share.
              We honor those golden years with kindness, comfort, and a daily dose of sunshine because at Sunflower Sunrays, every day is a new chance to live fully, laugh warmly, and feel truly at home.
              Welcome home to where care feels like family.
            </p>
          </div>

          <div className="heroRight">
            <div className="whyCard">
              <h2>Why Choose Us?</h2>
              <ul className="whyList">
                <li><span className="whyIcon"><strong>15+</strong></span> Years of Experience</li>
                <li><FaUserNurse className="whyIcon" /> 24/7 Professional Care</li>
                <li><FaHome className="whyIcon" /> Home-Like Environment</li>
                <li><FaClipboardList className="whyIcon" /> Personalized Care Plans</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;