import React from 'react';
import './App.css';
import GetUsers from './Components/GetUsers';
import Users from './Components/Users';
import UserDetail from './Components/UserDetails';

class App extends React.Component {
  state = {
    users: [],
    selectUserId: -1,
  };

  getUsersData = () => {
    fetch('http://uinames.com/api/?amount=5&ext')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  };

  getUsers = i => {
    console.log(i);
    this.setState({ selectUserId: i });
  };

  render() {
    return (
      <div>
        <GetUsers getUsers={this.getUsersData} />

        <div className='use'>
          <Users users={this.state.users} getUsers={this.getUsers} />

          <UserDetail userId={this.state.selectUserId} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
