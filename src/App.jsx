import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Error from './components/Error';
import Header from './components/Header';
import Body from './components/Body';

const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      {/* <Outlet /> // for rendering children routes inside the parent route. */}
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayOut />,
    // here paths for other components are used as children routes using Outlet component.
    children: [
      {
        path: '/',
        element: <Body />,
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// rending the functional component inside the tags instead of the elements in the React.
root.render(<RouterProvider router={router} />);
