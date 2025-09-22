import React from 'react';
import { EMAIL } from '../utils/constants';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        email: 'dummy@example.com',
        location: 'Unknown',
      },
    };
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/sourabhbagde');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log('I am from setInterval');
    }, 1000);
    console.log(json);
  }
  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.timer);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt={name} />
        <div className="user-info">
          <h2>Name : {name}</h2>
          <h3>Email: {EMAIL}</h3>
          <h4>Location: {location}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
