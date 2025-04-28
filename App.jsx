import React from 'react';
import ReactDOM from 'react-dom/client';
import appLogo from '../Project1/assets/restaurant.png';
import {
  gfc,
  biryanihouse,
  dinapolipizzeria,
  goldendragon,
  indianspice,
  grillmaster,
  lotusblossom,
  ninaskitchen,
  sabrosataqueria,
  saffronpalace,
} from './assets/restaurantImages';

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

const restaurantList = [
  {
    type: 'restaurant',
    data: {
      id: '001',
      name: 'GFC Chicken',
      cuisines: [
        'Southern Style Fried Chicken',
        'Hand-Breaded Chicken Tenders',
        'Crispy Chicken Sandwiches',
        'Spicy Wings and Chicken Buckets',
      ],
      restaurantImage: gfc,
      rating: 4.2,
      deliveryTime: 20,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '002',
      name: 'Grill Master',
      cuisines: [
        'American BBQ (Brisket, Ribs)',
        'Texas Grillhouse Specialties',
        'Smoked Meats and Steaks',
        'Southern Comfort BBQ]',
      ],
      restaurantImage: grillmaster,
      rating: 4.5,
      deliveryTime: 45,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '003',
      name: 'Indian Spice',
      cuisines: [
        'North Indian Curries and Tandoor',
        'Mughlai and Punjabi Cuisine',
        'Traditional Indian Thali Meals',
        'Street Food Snacks (Chat, Samosa)',
      ],
      restaurantImage: indianspice,
      rating: 4.4,
      deliveryTime: 30,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '004',
      name: 'Biryani House',
      cuisines: [
        'South Indian Biryani',
        'Hyderabadi Dum Biryani',
        'Lucknowi (Awadhi) Biryani',
        'Regional Indian Rice Platters',
      ],
      restaurantImage: biryanihouse,
      rating: 4.6,
      deliveryTime: 40,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '005',
      name: 'Golden Dragon',
      cuisines: [
        'Chinese Noodles and Rice',
        'Cantonese Cuisine',
        'Szechuan (Spicy) Chinese',
        'Chinese Dim Sum and Dumplings',
      ],
      restaurantImage: goldendragon,
      rating: 4.2,
      deliveryTime: 25,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '006',
      name: 'Lotus Blossom',
      cuisines: [
        'Authentic Vietnamese Pho',
        'Vietnamese Street Food (Banh Mi, Spring Rolls)',
        'Saigon Cuisine',
        'Hanoi Noodle Dishes',
      ],
      restaurantImage: lotusblossom,
      rating: 4.1,
      deliveryTime: 25,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '007',
      name: 'Saffron Palace',
      cuisines: [
        'Middle Eastern Kebabs and Rice',
        'Persian, Arabic Delicacies',
        'Lebanese Platters (Hummus, Shawarma)',
        'Turkish Sweets and Grills',
      ],
      restaurantImage: saffronpalace,
      rating: 4.5,
      deliveryTime: 35,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '008',
      name: "Nina's Kitchen",
      cuisines: [
        'Caribbean Jerk Chicken and Rice',
        'Island Cuisine (Curry Goat, Plantains)',
        'Jamaican Patties and Stews',
        'Trinidadian Roti and Curries',
      ],
      restaurantImage: ninaskitchen,
      rating: 4.0,
      deliveryTime: 40,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '009',
      name: 'Di Napoli Pizzeria',
      cuisines: [
        'Neapolitan (Hand Tossed) Pizza',
        'New York Style Pizza',
        'Wood-Fired Italian Pizza',
        'Sicilian Deep Dish Pizzas',
      ],
      restaurantImage: dinapolipizzeria,
      rating: 4.3,
      deliveryTime: 35,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '010',
      name: 'Sabrosa Taqueria',
      cuisines: [
        'Authentic Mexican Tacos and Burritos',
        'Tex-Mex Fusion Dishes',
        'Street Style Quesadillas and Tortas',
        'Baja California Coastal Mexican',
      ],
      restaurantImage: sabrosataqueria,
      rating: 4.2,
      deliveryTime: 20,
    },
  },
];
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
const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, rating, deliveryTime, restaurantImage } =
    restaurantData?.data;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="Restaurant Image"
        src={restaurantImage}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>Rating 🌟 {rating} stars</h4>
      <h4>Delivery Time: {deliveryTime} minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search Bar</div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            restaurantData={restaurant}
          />
        ))}
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
