import React from 'react';

const SearchFilter = () => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="search here..."
          className="search-box"
        ></input>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchFilter;
