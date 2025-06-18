import React from 'react';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="about-us-container">
        <div className="about-us">
          <span>
            This is a restaurant app with basic UI pages and simple functions
          </span>
          <p>Started as a react simple project</p>
          <p>If you found this project, please review and feedback</p>
          <p>@sourabh.bagde.1.sb@gmail.com</p>
          <p>Thanks, happy learning...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
