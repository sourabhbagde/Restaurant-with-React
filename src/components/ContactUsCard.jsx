import React from 'react';
import { EMAIL } from '../utils/constants';

const ContactUsCard = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <h3>
          Email Us at <span className="email">{EMAIL}</span>
        </h3>
      </div>
    </div>
  );
};

export default ContactUsCard;
