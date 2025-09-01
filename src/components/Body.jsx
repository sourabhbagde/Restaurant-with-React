import React from 'react';
import { useState, useEffect } from 'react';
import restaurantList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import SearchFilter from './SearchFilter';

const Body = () => {
  const [restaurantListToBeFiltered, setFilteredListToBeRestaurant] =
    useState(restaurantList);
  const [restaurantListFiltered, setFilteredListRestaurant] =
    useState(restaurantList);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = () => {
  //   const data = fetch();
  // };
  if (restaurantListToBeFiltered.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {/* <div className="caution"> - Resolved using React Router.
        Add extension to link with : /contact-us , /about-us , /home , /cart ,
        to see other pages. Currently not linked to tab menu due to other
        components build.
      </div> */}
      <div className="filter">
        <SearchFilter
          restaurantListFiltered={restaurantList}
          setFilteredListRestaurant={setFilteredListRestaurant}
        />
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              console.log('Button Clicked');

              const filteredList = restaurantList.filter(
                (res) => res.data.rating >= 4.5,
              );
              setFilteredListRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
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
