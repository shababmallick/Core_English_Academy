import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Admissions from "./components/Admissions";
import Curriculum from "./components/Curriculum";
import ContactUs from "./components/ContactUs";
import GetInTouch from "./components/GetInTouch";
import LearnMore from "./components/LearnMore";
import PageNotFound from "./components/PageNotFound"; // Import PageNotFound component

const App = () => (
  <Router>
    <Header /> {/* Global header for all pages */}
    <Routes> {/* Defines different route paths */}
      <Route path="/" element={<Home />} /> {/* Default Home page */}
      <Route path="/about-us" element={<AboutUs />} /> {/* About Us page */}
      <Route path="/admissions" element={<Admissions />} /> {/* Admissions page */}
      <Route path="/curriculum" element={<Curriculum />} /> {/* Curriculum page */}
      <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us page */}
      <Route path="/get-in-touch" element={<GetInTouch />} /> {/* Get In Touch page */}
      <Route path="/learn-more" element={<LearnMore />} /> {/* Learn More page */}
      <Route path="*" element={<PageNotFound />} /> {/* Catch-all for undefined routes */}
    </Routes>
    <Footer /> {/* Global footer for all pages */}
  </Router>
);

export default App;

