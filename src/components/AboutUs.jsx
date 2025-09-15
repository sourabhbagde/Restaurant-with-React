import React from 'react';
import User from './User';
import UserClass from './UserClass';
const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="about-us"></div>
        <h1>just for practice - will modify soon</h1>
        <h2> About Us card created using functional component</h2>
        <User
          name={'Sourabh'}
          email={'sourabh.bagde.1.sb@gmail.com'}
          location={'Arlington, Texas'}
        />
        <h2> About Us card created using class based component</h2>
        <UserClass
          name={'Sourabh'}
          email={'sourabh.bagde.1.sb@gmail.com'}
          location={'Arlington, Texas'}
        />
      </div>
    </div>
  );
};

export default AboutUs;
