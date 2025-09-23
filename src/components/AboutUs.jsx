import React from 'react';
// import User from './User';
import UserClass from './UserClass';
const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        <h2> About the Developer </h2>
        <UserClass
          name={'Sourabh'}
          email={'oujisavi@gmail.com'}
          location={'Texas'}
        />
      </div>
    </div>
  );
};

export default AboutUs;
