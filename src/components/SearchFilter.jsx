import React from 'react';

const SearchFilter = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search here..."
        className="search-box"
      ></input>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchFilter;
