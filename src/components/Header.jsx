import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <h1>Core English Academy</h1>
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
      <NavLink to="/admissions" activeClassName="active">Admissions</NavLink>
      <NavLink to="/curriculum" activeClassName="active">Curriculum</NavLink>
      <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
    </nav>
  </header>
);

export default Header;
