import React, { useState } from 'react';

const SearchFilter = ({
  restaurantListFiltered,
  setFilteredListRestaurant,
}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search here..."
        className="search-box"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          const searchedList = restaurantListFiltered.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase()),
          );
          setFilteredListRestaurant(searchedList);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
