import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About the company</h1>
      <Link to="/contact">Contact us</Link> <br />
      <Link to="/">Back to homePage</Link>
    </div>
  );
};

export default AboutPage;
