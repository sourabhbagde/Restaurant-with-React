import React from 'react';

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, rating, deliveryTime, restaurantImage } =
    restaurantData?.data || {}; // destructuring the restaurant data object to get the required details.
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

export default RestaurantCard;
