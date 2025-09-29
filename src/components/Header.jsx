import React, { useState } from 'react';
import { RESTAURANTNAME } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import useLiveStatus from '../utils/useLiveStatus';
import appLogo from '../../assets/restaurant.png';
const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const isOnline = useLiveStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={appLogo} alt="Restaurant App Logo"></img>
      </div>
      <span className="restaurant-name">{RESTAURANTNAME}</span>

      <div className="nav-items">
        <ul className="links">
          <li className="link-item" onClick={() => {}}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About Us
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cart
            </NavLink>
          </li>
          <li className="status">{isOnline ? 'live 🟢' : 'offline 🔴'}</li>
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
