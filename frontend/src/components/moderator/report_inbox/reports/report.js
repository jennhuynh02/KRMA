import React from 'react';

class Report extends React.Component {
  componentDidMount() {
    const { treasure, reportTreasure } = this.props;
    // reportTreasure
  }

  render() {
    const { user, deleteSelectedUser, treasure } = this.props;
    let id;
    id = user._id;
    let imgUrl = treasure.url
    return (
    <li className="user-box">
      <h1>{user.firstName} {user.lastName}</h1>
      <h1>{user.email}</h1>
      <img src="imgUrl" />
      <button onClick={() => deleteSelectedUser(id)}>Delete User</button>
    </li>
    );
  }
}

export default Report;
