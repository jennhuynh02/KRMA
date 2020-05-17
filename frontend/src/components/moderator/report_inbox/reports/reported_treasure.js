import React from 'react';

class ReportedTreasure extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.unflagTreasure = this.unflagTreasure.bind(this);

  }

  handleDelete(e) {
    const { deleteTreasure, treasure } = this.props;
    e.preventDefault();
    deleteTreasure(treasure._id);
    window.location.reload();
  }

  unflagTreasure() {
    const { treasure, updateFullTreasure } = this.props;
    const unflagTreasure = treasure;
    unflagTreasure.reported = false;
    unflagTreasure.reportMessage = '';
    updateFullTreasure(unflagTreasure);
  }

  render() {
    const { user, deleteSelectedUser, treasure, deleteTreasure } = this.props;
    let id;
    id = user._id;
    let imgUrl;
    let treasureId;
    imgUrl = treasure.url;
    treasureId = treasure._id;
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
          <button className="admin-reports-buttons" onClick={this.unflagTreasure}>Return Item Back To Treasure Box</button> 
          <button className="admin-reports-buttons" onClick={this.handleDelete}>Delete Treasure</button>
          <button className="admin-reports-buttons" onClick={() => deleteSelectedUser(id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default ReportedTreasure;
