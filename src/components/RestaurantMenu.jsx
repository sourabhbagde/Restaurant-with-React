import React from 'react';
import restaurantList from '../utils/restaurantListData';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
  // useEffect(() => {}, []);
  const { resId: id } = useParams(); // taken the restaurant ID from the URL as params.
  const restaurant = restaurantList.find((res) => res.data.id === id)?.data; // finding the restaurant by ID.
  if (!restaurant) {
    return <h1>Restaurant with ID {id} not found</h1>; // if restaurant id is not found.
  }
  return (
    <div className="restaurant-menu">
      <h1>{restaurant.name}</h1>
      <img src={restaurant.restaurantImage} alt={restaurant.name} />
      <h2>{restaurant.name} Menu</h2>
      <h4>{restaurant.cuisines.join(', ')}</h4>
    </div>
  );
};

export default RestaurantMenu;
