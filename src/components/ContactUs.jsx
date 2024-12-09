import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulating a form submission
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us.</p>

      <section className="contact-details">
        <h2>Our Contact Details</h2>
        <p><strong>Address:</strong> Core English Academy, Gagan Diwan Near Petrol Pump Ranchi Road, Bihar Sharif, Bihar, India</p>
        <p><strong>Phone:</strong> +9122975007</p>
        <p><strong>Email:</strong> mdshababmallick123@gmail.com</p>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {formSuccess && (
          <p className="success-message">Thank you for reaching out! We will get back to you shortly.</p>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
