import React from 'react';
import ReactDOM from 'react-dom/client';
import appLogo from '../Project1/assets/restaurant.png';
import gfcLogo from '../Project1/assets/gfc.png';
// React element
// const parent = <h3 id="heading">This is JSX h1 tag</h3>;
// console.log(parent);

// const FunctionalComponentExample2 = () => {
//   return (
//     <div>
//       <h2 className="heading2">
//         Multi Liner Headers 1 inside FunctionalComponentExample2
//       </h2>
//     </div>
//   );
// };

// React functional component
// const FunctionalComponentExample = () => {
//   return (
//     <div>
//       <FunctionalComponentExample2 />
//       {FunctionalComponentExample2()}
//       {parent}
//       <h2 className="heading">
//         Multi Liner Headers Main inside FunctionalComponentExample
//       </h2>
//     </div>
//   );
// };
// console.log(FunctionalComponentExample);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={appLogo} alt="Restaurant App Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="GFC Restaurant logo"
        src={gfcLogo}
      ></img>
      <h3>GFC</h3>
      <h4>Fried Chicken</h4>
      <h4>3.9 stars</h4>
      <h4>42 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search Bar</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

// rending the functional component inside the tags instead of the elements in the React.
root.render(<AppLayOut />);
