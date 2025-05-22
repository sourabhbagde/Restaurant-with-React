import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../../assets/restaurant.png';
const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={appLogo} alt="Restaurant App Logo"></img>
      </div>
      <div className="nav-items">
        <ul className="links">
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" style={{ textDecoration: 'none' }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              Cart
            </Link>
          </li>
          <button
            className="login-button"
            onClick={() => {
              loginBtn === 'Login'
                ? setLoginBtn('Logout')
                : setLoginBtn('Login');
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
