import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
const AppLayOut = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

// rending the functional component inside the tags instead of the elements in the React.
root.render(
  <BrowserRouter>
    <AppLayOut />
  </BrowserRouter>,
);
