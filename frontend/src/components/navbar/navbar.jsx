import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.getTreasure = this.getTreasure.bind(this);
  }

  getTreasure(e) {
    e.preventDefault();
    const { openModal, currentUser } = this.props;
    if (currentUser.keyCount > 0) {
      openModal({ retrieve: -1 });
      currentUser.keyCount -= 1;
    } else {
      alert('You currently have 0 karma. To receive good karma, you must first give good karma. Add something!');
    }
  }

  render() {
    const { openModal, logout } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to='/treasureisland'><h1>KRMA</h1></Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-items">
            <div className="navbar-dropdown">
              <div>Add</div>
              <ul className="navbar-dropdown-content">
                <li onClick={() => openModal({ photo: -1 })}>Upload a Photo</li>
                <li onClick={() => openModal({ type: 'Share a quote!' })}>Share a Quote</li>
                <li onClick={() => openModal({ type: 'Recommend a book!' })}>Recommend a Book</li>
                <li onClick={() => openModal({ type: 'Link a song!' })}>Link a Song</li>
                <li onClick={() => openModal({ type: 'Recommend event!' })}>Recommend an Event</li>
                <li onClick={() => openModal({ type: 'Tell a story' })}>Tell a Story</li>
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
