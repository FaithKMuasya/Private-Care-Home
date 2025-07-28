// Footer.jsx
import React from "react";
import { Heart, Phone, Mail, MapPin, Clock, Home, Users, Shield } from "lucide-react";
import "./footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return ( 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-brand">
              <div className="footer-icon">
                <Heart className="icon-foreground" />
              </div>
              <div>
                <h3 className="footer-title">Sunflower Sunrays</h3>
                <p className="footer-subtitle">Brightening lives one Ray at a time</p>
              </div>
            </div>
            <p className="footer-description">
              Providing high-quality residential assisted living services to seniors and individuals 
              with disabilities in a warm, family-oriented environment. Our goal is to help our 
              residents maintain their independence while receiving the care they need.
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone className="icon-primary" />
                <span>214-612-7369</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="icon-primary" />
                <span>Info@sephusenterprises.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="icon-primary" />
                <span>1900 Pacific Ave</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {["home", "about", "services", "contact", "services"].map((link, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(link)}>
                    {link === "about" ? "About Us" : link === "services" && index === 4 ? "Our Facilities" : link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-services">
            <h4 className="footer-heading">Our Services</h4>
            <ul>
              <li><Home className="icon-primary" /><span>24/7 Personal Care</span></li>
              <li><Users className="icon-primary" /><span>Social Activities</span></li>
              <li><Shield className="icon-primary" /><span>Medical Coordination</span></li>
              <li><Clock className="icon-primary" /><span>Visiting Hours: 9 AM - 6 PM</span></li>
              <li><Heart className="icon-primary" /><span>Family-Like Environment</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2024 Private Care Home. All rights reserved.</p>
          <div className="footer-policy">
            <button onClick={() => scrollToSection("contact")}>Privacy Policy</button>
            <button onClick={() => scrollToSection("contact")}>Terms of Service</button>
            <button onClick={() => scrollToSection("contact")}>Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
