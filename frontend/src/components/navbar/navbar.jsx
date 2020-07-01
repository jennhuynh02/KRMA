import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyCount: this.props.currentUser.keyCount,
    };
    this.getTreasure = this.getTreasure.bind(this);
  }

  componentDidMount() {
    const { getCurrentUser, currentUser } = this.props;
    getCurrentUser(currentUser._id);
  }

  getTreasure(e) {
    e.preventDefault();
    const { openModal, currentUser } = this.props;
    if (currentUser.keyCount > 0) {
      openModal({ retrieve: -1 });
      currentUser.keyCount -= 1;
    } else {
      openModal({ instructions: -1 });
    }
  }

  render() {
    const { openModal, logout } = this.props;
    return (
      <div className="navbar-container" id="navbar-id">
        <div className="navbar-left">
          <Link to='/collection'><h1>KRMA</h1></Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-items">
            <span className="user-karma">Your Karma: {this.props.currentUser.keyCount}</span>
            <div className="navbar-dropdown">
              <div>Add</div>
              <ul className="navbar-dropdown-content">
                <li onClick={() => openModal({ photo: -1 })}>Upload a Photo</li>
                <li onClick={() => openModal({ type: 'Share a Quote' })}>Share a Quote</li>
                <li onClick={() => openModal({ type: 'Recommend a Book' })}>Recommend a Book</li>
                <li onClick={() => openModal({ type: 'Link a Song' })}>Link a Song</li>
                <li onClick={() => openModal({ type: 'Recommend an Event' })}>Recommend an Event</li>
                <li onClick={() => openModal({ type: 'Share a Story' })}>Share a Story</li>
              </ul>
            </div>
            <div onClick={this.getTreasure}>Redeem</div>
            <Link to='/collection'>Collection</Link>
            <div onClick={() => logout()}>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
