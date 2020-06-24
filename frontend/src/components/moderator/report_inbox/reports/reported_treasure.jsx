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
    const {
      user, deleteSelectedUser, treasure,
    } = this.props;

    const id = user._id;
    const imgUrl = treasure.url;
    const reportMsg = treasure.reportMessage;

    return (
      <div className="report-info">
        <h1>
          {' '}
          Item was created by
          {' '}
          {user.firstName}
          {' '}
          {user.lastName}
        </h1>
        <h1>
          Email:
          {user.email}
        </h1>
        <img className="content-img" src={imgUrl} />
        <p>
          Flagged Content Message:  "
          {reportMsg}
          "
        </p>
          <div className="dropdown">
            <p className="drop-button-dots">* * *</p>
            <ul className="dropdown-content">
              <li className="dropdown-options" onClick={this.unflagTreasure}>Return Item Back To Treasure Box</li>
              <li className="dropdown-options" onClick={this.handleDelete}>Delete Treasure</li>
              <li className="dropdown-options" onClick={() => deleteSelectedUser(id)}>Delete User</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default ReportedTreasure;
