import React, { Children, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import AboutUs from './components/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Error from './components/Error';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import SpecificRestaurantCard from './components/SpecificRestaurantCard';
// import Groceries from './components/Groceries';

const Groceries = lazy(() => import('./components/Groceries'));
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
      {
        path: '/restaurant',
        element: <SpecificRestaurantCard />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      // lazy loading or code splitting
      // when the user clicks on the groceries link only then the groceries component will be loaded.
      // this will reduce the bundle size and improve the performance of the app.
      // this is also called dynamic import.
      {
        path: '/Groceries',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// rending the functional component inside the tags instead of the elements in the React.
root.render(<RouterProvider router={router} />);
