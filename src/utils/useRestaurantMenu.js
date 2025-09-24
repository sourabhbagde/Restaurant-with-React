import React from 'react';
import { useEffect, useState } from 'react';
import restaurantList from '../utils/restaurantListData';

const useRestaurantMenu = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const restaurant = restaurantList.find((res) => res.data.id === id)?.data;
    setRestaurantInfo(restaurant || null); // if restaurant not found, set to null such that it doesn't make it undefined.
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
