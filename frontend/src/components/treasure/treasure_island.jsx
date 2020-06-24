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
    if (this.props.loggedIn && (this.props.user.email === 'admin@treasurebox.com')) {
      return (
        <div>
          <AdminBarContainer />
        </div>
      );
    }
  }

  render() {
    const { openModal, currentUser, keyCount } = this.props;

    const keyAccess = () => {
      if (keyCount > 0) {
        return (
          <div>
            <img className="key" src="TreasureKey.jpg" onClick={this.getTreasure} alt="treasurekey" />
          </div>
        );
      }
      return (
        <img className="key" src="TreasureKey.jpg" alt="treasurekey" />
      );
    };

    return (
      <div className="treasure-island">
        {this.getAdminPortal()}
        <NavBarContainer />
        <h1 className="island-header">Welcome to Treasure Island</h1>
        <div className="treasure-island-body">

          <div className="bucket-box">
            <img style={{ height: 300 }} src="treasure_box.png" alt="treasurebox"/>
            <p className="bucket-explanation">Upload an item, where it will go into an AWS S3 bucket and you will never see it again.  In return, you will receive a key in order to retrieve a treasure uploaded by another user.  Call it a one-to-one exchange.</p>
            <div className="key-pocket">
              <button type="button" onClick={() => openModal({ photo: -1 })}>
                Upload a photo!
              </button>
              <button type="button" onClick={() => openModal({ type: 'Share a quote!' })}>
                Share a quote!
              </button>

              <button type="button" onClick={() => openModal({ type: 'Recommend a book!' })}>
                Recommend book!
              </button>

              <button type="button" onClick={() => openModal({ type: 'Link a song!' })}>
                Link a song!
              </button>

              <button type="button" onClick={() => openModal({ type: 'Recommend event!' })}>
                Suggest event!
              </button>

              <button type="button" onClick={() => openModal({ type: 'Tell a story' })}>
                Tell a story!
              </button>

            </div>
            <div className="key-pocket">
              Use a key to open a treasure chest!
              {keyAccess()}
              Your Keys:  #
              {keyCount}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TreasureIsland;
