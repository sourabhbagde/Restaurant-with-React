import React, { useState } from 'react';

const SearchFilter = ({
  restaurantListFiltered,
  setFilteredListRestaurant,
}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="search-container flex items-center space-x-10">
      <input
        type="text"
        placeholder="search here..."
        className="search-box border px-2 py-2 w-96 border-gray-300 rounded"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search-btn px-4 py-2 bg-blue-500 text-white rounded"
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
