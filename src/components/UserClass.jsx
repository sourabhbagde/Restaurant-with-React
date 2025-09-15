import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Email: {email}</h3>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
