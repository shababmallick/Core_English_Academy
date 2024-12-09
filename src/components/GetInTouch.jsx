import React, { useState } from 'react';
import '../styles/GetInTouch.css';  // Make sure you create this CSS file

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setStatusMessage('Please fill out all fields.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      setIsLoading(false);

      if (response.ok) {
        setStatusMessage('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setIsLoading(false);
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="get-in-touch">
      <h1>Get in Touch</h1>
      <p>We’d love to hear from you! Fill out the form below to send us a message.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMessage && <p aria-live="polite">{statusMessage}</p>}
    </div>
  );
};

export default GetInTouch;
