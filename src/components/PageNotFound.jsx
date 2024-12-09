// src/pages/PageNotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageNotFound.css';  // Add styles for this page

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Sorry, the page you're looking for cannot be found.</p>
      <Link to="/" className="back-home-btn">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
