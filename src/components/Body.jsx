import React from 'react';
import { useState, useEffect } from 'react';
import restaurantList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import SearchFilter from './SearchFilter';

const Body = () => {
  const [restaurantListFiltered, setFilteredListOfRestaurant] =
    useState(restaurantList);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = () => {
  //   const data = fetch();
  // };
  if (restaurantListFiltered.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {/* <div className="search-bar">Search Bar</div> */}
      <div className="filter">
        <SearchFilter />
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
