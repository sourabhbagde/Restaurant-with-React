import React from 'react';

import restaurantList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

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

export default Body;
