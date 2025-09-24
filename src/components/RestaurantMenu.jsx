import React from 'react';

import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
  const { resId: id } = useParams(); // taken the restaurant ID from the URL as params.
  const restaurantInfo = useRestaurantMenu(id);
  if (restaurantInfo === null) return <h2>Restaurant not found</h2>;

  const { name, cuisines, rating, deliveryTime } = restaurantInfo || {}; // destructuring the restaurant info object to get the required details.

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>Rating 🌟 {rating} stars</h3>
      <h3>Delivery Time: {deliveryTime} mins</h3>
      <h2>Menu</h2>
      <h4>{cuisines.join(', ')}</h4>
    </div>
  );
};

export default RestaurantMenu;
