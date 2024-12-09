// src/pages/LearnMore.jsx
import React, { useEffect } from 'react';
import '../styles/LearnMore.css';  // Ensure you create this CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';  // Correct import for Link component

const LearnMore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="learn-more">
      <h1 data-aos="fade-up">Learn More About Core English Academy</h1>
      <p data-aos="fade-up">Core English Academy is dedicated to providing high-quality education to students from Class 1 to 12. Our mission is to foster academic excellence and holistic growth in every student.</p>

      <h2 data-aos="fade-up">Why Choose Us?</h2>
      <p data-aos="fade-up">We offer a variety of programs to suit different learning needs:</p>
      <ul data-aos="fade-up">
        <li>Experienced and qualified teachers</li>
        <li>Personalized learning approach</li>
        <li>Regular assessments and feedback</li>
        <li>State-of-the-art facilities and resources</li>
        <li>Focus on both academic and personal development</li>
      </ul>

      <h2>Our Programs</h2>
      <p>We offer a variety of programs to suit different learning needs:</p>
      <ul>
        <li><strong>Academic Coaching:</strong> For students from Class 1 to 12 in all major subjects.</li>
        <li><strong>English Language Skills:</strong> For students seeking to improve their proficiency in English.</li>
        <li><strong>Test Preparation:</strong> Special programs to help students prepare for competitive exams.</li>
      </ul>

      <p data-aos="fade-up">We believe in nurturing the potential of each student and ensuring they have the tools and support to succeed both academically and in life.</p>
      <p data-aos="fade-up">
        If you’re ready to start your educational journey with us, <Link to="/contact-us" className="cta-button">Get in Touch</Link>.
      </p>
    </div>
  );
};

export default LearnMore;
