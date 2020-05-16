import React from 'react';

class User extends React.Component {
  render() {
    const { user, deleteSelectedUser } = this.props;
    let id;
    id = user._id;
    return (
    <div className="user-box">
      <div>
        <h1>{user.firstName} {user.lastName}</h1>
        <h1>{user.email}</h1>
        <br />
        <button className="user-delete-button" onClick={() => deleteSelectedUser(id)}>Delete User</button>
      </div>
    </div>
    );
  }
}

export default User;
