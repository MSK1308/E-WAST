import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'E-Waste Collection', description: 'Convenient pickup services.' },
    { title: 'Recycling Process', description: 'Environmentally friendly recycling.' },
    { title: 'Sustainability Benefits', description: 'Contribute to a greener planet.' },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
