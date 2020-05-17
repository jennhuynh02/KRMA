import React from 'react';

class Report extends React.Component {
  render() {
    const { user, deleteSelectedUser, treasure } = this.props;
    let id;
    id = user._id;
    let imgUrl;
    imgUrl = treasure.url;
    let reportMsg;
    reportMsg = treasure.reportMessage;
    return (
      <div className="content-item">
        <div className="report-info">
          <h1> Item was created by {' '}
            {user.firstName}
            {' '}
            {user.lastName}
          </h1>
          <h1>Email:  {user.email}</h1>
          <img className="content-img" src={imgUrl} />
          <p>
            Flagged Content Report Message:  "
            {reportMsg}
            "
          </p>
          {/* item blacklisted by this user - create a blacklisted items hash for each user */}
          <button className="admin-reports-buttons" >Return Item Back To Treasure Box</button> 
          <button className="admin-reports-buttons" >Delete Treasure</button>
          <button className="admin-reports-buttons" onClick={() => deleteSelectedUser(id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default Report;
