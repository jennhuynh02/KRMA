import React from 'react';
import Modal from '../modal/modal';

import NavBarContainer from '../navbar/navbar_container';
import AdminBarContainer from '../adminbar/admin_bar_container';

class TreasureIsland extends React.Component {
  constructor(props) {
    super(props);
    const { openModal } = this.props;

    this.getTreasure = this.getTreasure.bind(this);
    this.getAdminPortal = this.getAdminPortal.bind(this);
  }

  componentDidMount() {
    const { fetchAllUsers, getCurrentUser, currentUser } = this.props;
    getCurrentUser(currentUser._id);
  }

  getTreasure(e) {
    e.preventDefault();
    const { openModal, currentUser } = this.props;
    window.location.href = '/#/treasureisland';
    openModal({ retrieve: -1 });
    currentUser.keyCount -= 1;
    window.location.href = '/#/treasureisland';
  }

  getAdminPortal() {
    const {loggedIn, user } = this.props;
    if (user.email === 'admin@krma.com' && loggedIn) { // why do we need logged in?
      return (
        <div>
          <AdminBarContainer />
        </div>
      );
    }
  }

  render() {
    const { openModal, currentUser, keyCount } = this.props;

    return (
      <div className="main">
        {this.getAdminPortal()}
        <NavBarContainer />
          <div className="bucket-box">
            <div className="counter">
              <span>Your Karma:</span>
              <span>{keyCount}</span>
            </div>
          </div>
        {/* <span>“A society grows when old men plant trees in whose shade they know they shall never sit”</span> */}
      </div>
    );
  }
}

export default TreasureIsland;
