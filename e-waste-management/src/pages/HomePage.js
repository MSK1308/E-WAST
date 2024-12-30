import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to E-Waste Management</h1>
        <p>Join us in building a sustainable future by recycling e-waste responsibly.</p>
      </header>
      <section className="info-section">
        <h2>What We Do</h2>
        <p>
          We provide eco-friendly solutions for managing e-waste. From collection to recycling, we ensure that your e-waste is handled responsibly.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
