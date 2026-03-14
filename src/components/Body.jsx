import React from 'react';
import { useState } from 'react';
import restaurantList from '../utils/restaurantListData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router-dom';
import useLiveStatus from '../utils/useLiveStatus';

const Body = () => {
  const [restaurantListToBeFiltered, setFilteredListToBeRestaurant] =
    useState(restaurantList);
  const [restaurantListFiltered, setFilteredListRestaurant] =
    useState(restaurantList);
  const isOnline = useLiveStatus();

  if (restaurantListToBeFiltered.length === 0) {
    return <Shimmer />;
  }
  if (isOnline === false) {
    return <h1> You are offline, please check your internet connection.</h1>;
  }
  return (
    <div className="body">
      <div className="search-filter-container flex items-center space-x-10 p-4">
        <SearchFilter
          restaurantListFiltered={restaurantList}
          setFilteredListRestaurant={setFilteredListRestaurant}
        />
        <div className="filter-container flex rounded">
          <button
            className="filter-btn p-2 bg-green-500 text-white rounded"
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
      <div className="restaurant-container flex flex-wrap">
        {restaurantListFiltered.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={'/restaurants/' + restaurant.data.id}
            className="restaurant-link"
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
