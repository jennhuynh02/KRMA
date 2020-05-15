import React from 'react';

class Report extends React.Component {

  render() {
    const { user, deleteSelectedUser, treasure } = this.props;
    let id;
    id = user._id;
    let imgUrl 
    imgUrl = treasure.url
    let reportMsg;
    reportMsg = treasure.reportMessage
    return (
    <div className="the-collection">
    <div className="reports-box">
      <h1>{user.firstName} {user.lastName}</h1>
      <h1>{user.email}</h1>
        <img className="content-image-rp" src={imgUrl} />
        <p>Report Message:  "{reportMsg}"</p>
      <button className="reports-button" onClick={() => deleteSelectedUser(id)}>Delete User</button>
    </div>
    </div>
    );
  }
}

export default Report;
