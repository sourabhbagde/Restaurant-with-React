import React from 'react';
import { useState } from 'react';
import restaurantList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [restaurantListFiltered, setFilteredListOfRestaurant] =
    useState(restaurantList);
  return (
    <div className="body">
      {/* <div className="search-bar">Search Bar</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log('Button Clicked');

            const filteredList = restaurantList.filter(
              (res) => res.data.rating >= 4.5,
            );
            setFilteredListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantListFiltered.map((restaurant) => (
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
