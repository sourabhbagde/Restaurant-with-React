import React from 'react';
const User = (props) => {
  const { name, email, location } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h4>Location: {location}</h4>
    </div>
  );
};
export default User;
