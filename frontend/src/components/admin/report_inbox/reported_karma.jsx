import React from 'react';

class ReportedKarma extends React.Component {
  handleDelete(type) {
    const { deleteTreasure, deleteUser, treasure } = this.props;
    if (type === 'karma') {
      deleteTreasure(treasure._id);
      window.location.reload();
    } else if (type === 'user') {
      deleteUser(treasure.creatorId);
    }
  }

  unflagTreasure() {
    const { treasure, updateFullTreasure } = this.props;
    const unflagTreasure = treasure;
    unflagTreasure.reported = false;
    unflagTreasure.reportMessage = '';
    updateFullTreasure(unflagTreasure);
  }

  render() {
    const { user, treasure } = this.props;

    return (
      <div className="report-content-main">
        <div className="item-dropdown">
          <i className="fa fa-bars" aria-hidden="true" />
            <ul className="item-dropdown-content">
              <li className="dropdown-options" onClick={() => this.unflagTreasure()}>Approve Karma</li>
              <li className="dropdown-options" onClick={() => this.handleDelete('karma')}>Delete Karma</li>
              <li className="dropdown-options" onClick={() => this.handleDelete('user')}>Delete User</li>
            </ul>
        </div>
        <div className="report-content-reason">
          <p>
            Report Reason: <span>{treasure.reportMessage}</span>
          </p>
        </div>
        <img className="content-image" src={treasure.url} alt="content" />
      </div>
    );
  }
}

export default ReportedKarma;
