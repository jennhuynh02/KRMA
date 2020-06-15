import React from 'react';

class AdminBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleContentsButton(e) {
    e.preventDefault();
    window.location.href = '/#/contents';
  }

  handleReportsButton(e) {
    e.preventDefault();
    window.location.href = '/#/reports';
  }

  handleUsersButton(e) {
    e.preventDefault();
    window.location.href = '/#/users';
  }

  handleTreasurePageButton(e) {
    e.preventDefault();
    window.location.href = '/#/treasureisland';
  }

  handleCollectionPageButton(e) {
    e.preventDefault();
    window.location.href = '/#/collection';
  }

  render() {
    return (
      <div>
        <div className="admin-bar-navigators">

          <p className="admin-bar-option" onClick={this.handleContentsButton}>Monitor Contents</p>

          <br />

          <p className="admin-bar-option" onClick={this.handleReportsButton}>View Flagged Reports</p>

          <br />

          <p className="admin-bar-option" onClick={this.handleUsersButton}>All Users</p>

          <br />

          <p className="admin-bar-option" onClick={this.handleTreasurePageButton}>Collected Treasure</p>

          <br />
          
          <p className="admin-bar-option" onClick={this.handleCollectionPageButton}>My Collection</p>
        </div>
      </div>
    );
  }
}

export default AdminBar;
