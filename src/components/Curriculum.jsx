// src/pages/Curriculum.jsx
import React from 'react';
import '../styles/Curriculum.css'; // Import the CSS for styling
import  { useState } from 'react';
import { Helmet } from 'react-helmet';

const CollapsibleItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-item">
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        {title} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const Curriculum = () => {
  return (
    <div className="curriculum">
         <img src="/path-to-banner-image.jpg" alt="Class 7 Curriculum" className="curriculum-banner" />
         <h1>Our Curriculum - Class 7</h1>
         <Helmet>
        <title>Class 7 Curriculum | Core English Academy</title>
        <meta
          name="description"
          content="Explore the comprehensive Class 7 curriculum at Core English Academy, including English, Math, Science, and Social Science."
        />
      </Helmet>
         <section className="curriculum-section">
        <CollapsibleItem title="English Language & Literature">
          <ul>
            <li>Advanced English Grammar...</li>
            <li>Comprehension & Vocabulary...</li>
          </ul>
        </CollapsibleItem>
        <CollapsibleItem title="Mathematics">
          <ul>
            <li>Integers, Fractions...</li>
            <li>Understanding Algebraic...</li>
          </ul>
        </CollapsibleItem>
      </section>
         <p>At Core English Academy, we offer a comprehensive curriculum...</p>
       

      <section className="curriculum-section">
        <h2>Class 7: Intermediate Stage</h2>
        <p>Class 7 is a key stage in a student's educational journey. Our curriculum is designed to help students strengthen their foundation in subjects while introducing more advanced concepts to ensure a smooth transition to higher grades.</p>

        <div className="curriculum-list">
          <div className="curriculum-item">
            <h3>English Language & Literature</h3>
            <ul>
              <li>Advanced English Grammar (Tenses, Passive Voice, Direct & Indirect Speech)</li>
              <li>Comprehension & Vocabulary Building</li>
              <li>Introduction to Literary Genres (Poetry, Prose, and Drama)</li>
              <li>Writing Skills (Essays, Letters, and Stories)</li>
            </ul>
          </div>

          <div className="curriculum-item">
            <h3>Mathematics</h3>
            <ul>
              <li>Integers, Fractions, and Decimals</li>
              <li>Understanding Algebraic Expressions</li>
              <li>Geometrical Shapes and Properties</li>
              <li>Mensuration (Perimeter, Area, and Volume)</li>
            </ul>
          </div>

          <div className="curriculum-item">
            <h3>Science</h3>
            <ul>
              <li>Introduction to Physics (Force, Motion, and Energy)</li>
              <li>Basic Chemistry (Matter, Elements, and Compounds)</li>
              <li>Biology (Life Processes, Cells, and Plant Structure)</li>
              <li>Environmental Studies (Ecosystem, Air, Water)</li>
            </ul>
          </div>

          <div className="curriculum-item">
            <h3>Social Science</h3>
            <ul>
              <li>History: The Medieval World (The Mughal Empire, Medieval Kingdoms)</li>
              <li>Geography: Earth and Its Resources</li>
              <li>Civics: Government Systems and Civic Responsibilities</li>
              <li>Economics: Introduction to Money, Trade, and Markets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="curriculum-highlights">
        <h2>Special Programs & Highlights</h2>
        <p>Along with the core subjects, we offer additional programs to enhance the learning experience for our Class 7 students:</p>
        <ul>
          <li>English Communication Workshops</li>
          <li>Interactive Science Experiments</li>
          <li>Math Problem-Solving Challenges</li>
          <li>Field Trips and Educational Excursions</li>
          <li>Project-Based Learning Activities</li>
        </ul>
      </section>
      <div className="call-to-action">
  <p>Ready to enroll your child? <a href="/admission">Apply for Admission Now</a></p>
</div>

    </div>
  );
};

export default Curriculum;
