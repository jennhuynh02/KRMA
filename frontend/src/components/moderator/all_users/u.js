import React from 'react';

class User extends React.Component {
  render() {
    const { user } = this.props
    return (
    <li className="user-box">
      <h1>{user.firstName} {user.lastName}</h1>
      <h1>{user.email}</h1>
      <br />
    </li>
    );
  }
}

export default User;