import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import CardDetails from './pages/CardDetails';
import Header from './components/Header';
import Body from './components/Body';
const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />

      {/* <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/card-details" element={<CardDetails />} />
      </Routes> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

// rending the functional component inside the tags instead of the elements in the React.
root.render(<AppLayOut />);
