import React, { useEffect } from 'react';
import '../styles/Home.css'; // Ensure you have the CSS file for styling
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
 // Assuming the Footer is in components folder

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Welcome to Core English Academy</h1>
          <p>Your pathway to academic success and holistic development.</p>
          <Link to="/contact-us" className="cta-button">Get in Touch</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" data-aos="fade-up">
        <h2>About Us</h2>
        <p>At Core English Academy, we provide top-notch coaching for students from Class 1 to 7. Our highly qualified teachers, state-of-the-art facilities, and personalized approach ensure the success of every student.</p>
        <Link to="/about-us" className="cta-button">Learn More</Link>
      </section>

      {/* Services Section */}
      <section className="services" data-aos="fade-up"> 
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Expert Coaching</h3>
            <p>Our experienced faculty offer expert coaching in all academic subjects, including English, Math, Science, and more.</p>
          </div>
          <div className="service-card">
            <h3>Personalized Learning</h3>
            <p>We tailor our teaching methods to each student's needs, helping them learn at their own pace and style.</p>
          </div>
          <div className="service-card">
            <h3>Regular Assessments</h3>
            <p>We conduct regular assessments to track student progress and provide constructive feedback.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Core English Academy helped me improve my grades significantly. The teachers are dedicated, and the learning environment is fantastic!"</p>
            <strong>- Student A</strong>
          </div>
          <div className="testimonial-card">
            <p>"I love the personalized attention I receive at Core English Academy. It has truly transformed my learning experience!"</p>
            <strong>- Student B</strong>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    
    </div>
  );
};

export default Home;


