import React from 'react';
import { FaUserMd, FaShieldAlt, FaHeart, FaHome } from 'react-icons/fa';
import { PiHandHeartFill } from 'react-icons/pi';
import { MdOutlineCottage } from 'react-icons/md';
import './about.css';

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutTitle">
        <h2>About Our Company</h2>
        <p>
          Sunflower Sunrays was founded with a heartfelt commitment to providing exceptional care for seniors and individuals with disabilities. Inspired by the warmth and resilience of the sunflower, our name reflects our mission: to bring light, comfort, and dignity to every life we touch.
          Rooted in compassion and guided by our motto, “Brightening lives one ray at a time,” we strive to create a nurturing, home-like environment where residents feel safe, valued, and truly at home.
        </p>
      </div>

      <div className="missionText">
        <h3>Our Mission & Values</h3>
        <p>
          At Sunflower Sunrays, our mission is to deliver high quality, personalized residential care that honors each individual’s unique needs and journey.
          Our founder, with extensive experience in private care, recognized the importance of compassionate, person centered support that empowers seniors to live with independence, dignity, and peace of mind.
          We believe that everyone deserves a place where they are respected, listened to, and genuinely cared for a place where they are not just residents, but cherished members of a family.
          Through kindness, professionalism, and a daily commitment to excellence, we aim to brighten each day, one caring ray at a time.
        </p>
      </div>

      <div className="missionCards">
        <div className="missionCard">
          <FaUserMd className="missionIcon" />
          <h4>Expert Staff</h4>
          <p>Professional caregivers with years of experience</p>
        </div>
        <div className="missionCard">
          <FaShieldAlt className="missionIcon" />
          <h4>Safety First</h4>
          <p>24/7 monitoring and emergency response</p>
        </div>
        <div className="missionCard">
          <FaHeart className="missionIcon" />
          <h4>Personalized Care</h4>
          <p>Individual care plans for each resident</p>
        </div>
        <div className="missionCard">
          <FaHome className="missionIcon" />
          <h4>Family Atmosphere</h4>
          <p>Creating lasting bonds and friendships</p>
        </div>
        <div className="missionCard">
          <PiHandHeartFill className="missionIcon" />
          <h4>Compassionate Care</h4>
          <p>Every resident receives personalized attention</p>
        </div>
        <div className="missionCard">
          <MdOutlineCottage className="missionIcon" />
          <h4>Home Environment</h4>
          <p>Creating a warm, family-like atmosphere</p>
        </div>
      </div>

      <div className="aboutCallToAction">
        <h3>Explore the possibilities and find the perfect living solution today!</h3>
        <p>Contact us to learn more about our caring community and schedule a visit</p>
      </div>
    </section>
  );
};

export default About;