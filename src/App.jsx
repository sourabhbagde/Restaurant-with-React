import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Error from './components/Error';

const AppLayOut = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayOut />,
    errorElement: <Error />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// rending the functional component inside the tags instead of the elements in the React.
root.render(<RouterProvider router={router} />);
