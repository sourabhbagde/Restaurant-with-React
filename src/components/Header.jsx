import React, { useState } from 'react';
import { RESTAURANTNAME, ISLIVE, ISOFFLINE } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import useLiveStatus from '../utils/useLiveStatus';
import appLogo from '../../assets/restaurant.png';
const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const isOnline = useLiveStatus();
  return (
    <div className="flex items-center justify-between bg-gray-100">
      <div className="logo-container">
        <img
          className="w-25 h-25"
          src={appLogo}
          alt="Restaurant App Logo"
        ></img>
      </div>
      <span className="font-bold text-xl text-gray-800">{RESTAURANTNAME}</span>

      <div className="flex items-center space-x-4 p-4 m-4">
        <ul className="flex space-x-10 ">
          <li className="link-item hover:bg-gray-200 p-4" onClick={() => {}}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="link-item hover:bg-gray-200 p-4">
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About Us
            </NavLink>
          </li>
          <li className="link-item hover:bg-gray-200 p-4">
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="link-item hover:bg-gray-200 p-4">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cart
            </NavLink>
          </li>
          <li className="link-item hover:bg-gray-200 p-4">
            <NavLink
              to="/Groceries"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Groceries
            </NavLink>
          </li>
          <li className="status p-4">{isOnline ? ISLIVE : ISOFFLINE}</li>
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
