import React from 'react';
import './services.css';
import { FaUtensils, FaBed, FaTv, FaWifi, FaTshirt, FaBath, FaHeart, FaUserMd, FaUsers, FaClock, FaShieldAlt, FaBroom } from 'react-icons/fa';

const facilities = [
  {
    icon: <FaUtensils />,
    title: "Food Provided",
    description: "Nutritious, home-cooked meals prepared daily with dietary accommodations"
  },
  {
    icon: <FaBed />,
    title: "Bed Provided in Each Room",
    description: "Comfortable, adjustable beds in private or semi-private rooms"
  },
  {
    icon: <FaTv />,
    title: "T.V. Provided in Every Room",
    description: "Entertainment and connection to the outside world in each living space"
  },
  {
    icon: <FaWifi />,
    title: "Wifi Provided",
    description: "High-speed internet access throughout the facility for staying connected"
  },
  {
    icon: <FaTshirt />,
    title: "Wash & Dryer",
    description: "Complete laundry services including personal clothing care"
  },
  {
    icon: <FaBath />,
    title: "All Toiletries",
    description: "Personal care items and hygiene supplies provided as needed"
  }
];

const services = [
  {
    icon: <FaHeart />,
    title: "Personal Care Assistance",
    description: "Help with daily activities including bathing, dressing, and grooming"
  },
  {
    icon: <FaUserMd />,
    title: "Medical Care Coordination",
    description: "Medication management and coordination with healthcare providers"
  },
  {
    icon: <FaUsers />,
    title: "Social Activities",
    description: "Engaging programs and activities to promote social interaction"
  },
  {
    icon: <FaClock />,
    title: "24/7 Supervision",
    description: "Round-the-clock care and monitoring for peace of mind"
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Security",
    description: "Secure environment with emergency response systems"
  },
  {
    icon: <FaBroom />,
    title: "Housekeeping Services",
    description: "Regular cleaning and maintenance of living spaces"
  }
];

const FacilitiesSection = () => {
  return (
    <section className="facilities-section" id="services">
      <h2 className="sub-head">Our Facilities & Services</h2>
      <p className="sub-heading">
        Our Private Care homes caters clients of all ages and nationalities.<br />
        Private care is just a subset of general home care and we have professional Caregivers that provide a broad range of services.
      </p>

      <h2 className="facilities-title">Facilities Included</h2>
      <div className="facilities-grid">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">{item.icon}</div>
            <h3 className="facility-title">{item.title}</h3>
            <p className="facility-desc">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="facilities-title services-title">Our Professional Care Services</h2>
      <div className="facilities-grid">
        {services.map((item, index) => (
          <div  className="facility-card" key={index}>
            <div className="facility-icon service-icon">{item.icon}</div>
            <h3 className="facility-title">{item.title}</h3>
            <p className="facility-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
