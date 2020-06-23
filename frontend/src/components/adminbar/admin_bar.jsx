import React from 'react';

class AdminBar extends React.PureComponent {
  handleClick(path) {
    window.location.href = `/#/${path}`
  }

  render() {
    return (
      <div>
        <div className="admin-bar-navigators">
          <span onClick={() => this.handleClick('contents')}>Monitor Contents</span>
          <span onClick={() => this.handleClick('reports')}>View Flagged Reports</span>
          <span onClick={() => this.handleClick('users')}>All Users</span>
          <span onClick={() => this.handleClick('treasureisland')}>Collected Treasure</span>
          <span onClick={() => this.handleClick('collection')}>My Collection</span>
        </div>
      </div>
    );
  }
}

export default AdminBar;
