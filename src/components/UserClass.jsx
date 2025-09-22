import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      email: props.email,
      location: props.location,
    };
  }
  // componentDidMount() {
  //   console.log('UserClass mounted');
  // }
  render() {
    const { name, email, location } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              name: 'John Doe',
              email: 'john.doe@example.com',
              location: 'New York',
            });
          }}
        >
          Update Info
        </button>
        <h2>Name : {name}</h2>
        <h3>Email: {email}</h3>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
