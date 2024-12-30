import React from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>E-Waste Collection</h3>
          <p>We provide doorstep e-waste collection services for households and businesses.</p>
        </div>
        <div className="service-item">
          <h3>Recycling Process</h3>
          <p>Your e-waste is recycled using eco-friendly methods to reduce landfill waste.</p>
        </div>
        <div className="service-item">
          <h3>Sustainability Benefits</h3>
          <p>Contribute to a cleaner environment by responsibly managing e-waste.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
