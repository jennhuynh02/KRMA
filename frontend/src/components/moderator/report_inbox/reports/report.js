import React from 'react';

class Report extends React.Component {

  render() {
    const { user, deleteSelectedUser, treasure } = this.props;
    let id;
    id = user._id;
    let imgUrl 
    imgUrl = treasure.url
    return (
    <li className="reports-box">
      <h1>{user.firstName} {user.lastName}</h1>
      <h1>{user.email}</h1>
        <img className="content-image-rp" src={imgUrl} />
      <button className="reports-button" onClick={() => deleteSelectedUser(id)}>Delete User</button>
    </li>
    );
  }
}

export default Report;
