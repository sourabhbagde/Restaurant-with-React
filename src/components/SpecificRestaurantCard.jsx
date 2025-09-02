import React from 'react';
import restaurantList from '../utils/restaurantListData';

const SpecificRestaurantCard = () => {
  return (
    <div>
      <div className="restaurant-profile-container">
        <div className="restaurant-profile">
          <img
            className="restaurant-profile-img"
            alt="Restaurant Image"
            src={restaurantList[1].data.restaurantImage}
          ></img>
          <h3>{restaurantList[1].data.name}</h3>
          <h3>
            {restaurantList[1].data.cuisines.map((cuisine, index) => (
              <span key={index}>
                {cuisine}
                <br />
              </span>
            ))}
          </h3>
          <h3>Rating 🌟 {restaurantList[0].data.rating} stars</h3>
          <h3>Delivery Time: {restaurantList[0].data.deliveryTime} minutes</h3>
        </div>

        <div className="restaurant-map">
          There will be a map in this container
        </div>
      </div>
      <div>8 pc Chicken Bucket</div>
    </div>
  );
};

export default SpecificRestaurantCard;
