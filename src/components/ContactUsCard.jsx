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
      <div className="contact-us-card">
        <h2> Leave Us a Note</h2>
        <input
          type="text"
          id="name"
          className="contact-info"
          placeholder="Full Name"
        ></input>
        <input
          type="email"
          id="email"
          className="contact-info"
          placeholder="Email Address (ex: example@abc.com)"
        ></input>

        <textarea
          type="text"
          id="text"
          className="contact-info-message"
          placeholder="Enter Message"
        ></textarea>
        <input type="submit" className="submit-btn" value="Submit" />
      </div>
    </div>
  );
};

export default ContactUsCard;
