import React from 'react';

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, rating, deliveryTime, restaurantImage } =
    restaurantData?.data || {}; // destructuring the restaurant data object to get the required details.
  return (
    <div className="restaurant-card m-4 p-4 flex-wrap w-60 bg-gray-50 hover:bg-gray-300 rounded">
      <img
        className="restaurant-logo rounded-lg"
        alt="Restaurant Image"
        src={restaurantImage}
      ></img>
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(', ')}</h4>
      <h4 className="text-gray-600">Rating 🌟 {rating} stars</h4>
      <h4 className="text-gray-600">Delivery Time: {deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
