import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    const { deleteSelectedUser, user } = this.props;
    deleteSelectedUser(user._id);
    window.location.reload();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="user-box">
        <div>
          <h2>{user.firstName}{' '}{user.lastName}</h2>
        </div>
        <div>
          <h2>{user.email}</h2>
        </div>
        <div className="user-delete-button-container">
          <div type="button" className="user-delete-button" onClick={this.deleteUser}>Delete</div>
        </div>
      </div>
    );
  }
}

export default User;
