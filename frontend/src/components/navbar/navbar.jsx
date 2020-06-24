import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
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
      <div className="navbar-wrapper">
        <div className="page-navbar">
          <div className="nav-item">
            <p onClick={this.handleTreasurePageButton}>Treasure</p>
          </div>
          <div className="nav-item">
            <p onClick={this.handleCollectionPageButton}>Collection</p>
          </div>
          <div className="nav-item">
            <p onClick={this.logoutUser}>Logout</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
