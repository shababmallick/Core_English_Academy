// src/pages/AboutUs.jsx
import React from 'react';
import '../styles/AboutUs.css'; // Importing the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to Core English Academy! We are dedicated to providing high-quality education for students from
        Nursery to 7th Grade. Our mission is to nurture young minds and provide a holistic learning experience.
      </p>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Core English Academy, our mission is to empower students with the skills and knowledge they need to
          excel academically and personally. We focus on developing a love for learning and building a strong
          foundation for future success.
        </p>
      </section>
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We aim to be a leading educational institution known for its commitment to excellence, creativity, and
          innovation. Our vision is to provide students with the tools to succeed in a rapidly evolving world.
        </p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <p>
          Our team of highly qualified teachers is passionate about making learning fun and engaging. With a focus on
          each child's individual needs, we help every student achieve their best potential.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
