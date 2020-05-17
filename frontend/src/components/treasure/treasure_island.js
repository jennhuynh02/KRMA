import React from 'react';
import Modal from '../modal/modal';

class TreasureIsland extends React.Component {
  constructor(props) {
    super(props);
    const { openModal } = this.props;

    this.getTreasure = this.getTreasure.bind(this);
  }

  componentDidMount() {
    const { fetchAllUsers } = this.props;
    fetchAllUsers();
  }

  getTreasure(e) {
    const { openModal, currentUser } = this.props;
    e.preventDefault();
    window.location.href = '/#/treasureisland';
    openModal({ retrieve: -1 });
    currentUser.keyCount -= 1;
  }


  render() {
    const { openModal, currentUser, keyCount } = this.props;

    const keyAccess = () => {
      if (keyCount > 0) {
        return (
          <div>
            <img className="key" src="TreasureKey.jpg" onClick={this.getTreasure} />
          </div>
        );
      }
      return (
        <img className="key" src="TreasureKey.jpg" />
      );
    };

    return (
      <div className="treasure-island">
        <h1 className="island-header">Welcome to Treasure Island</h1>
        {/* <Modal /> */}
        <div className="treasure-island-body">
          <div className="bucket-box">
            <p className="bucket-explanation">Upload an item, where it will go into an AWS S3 bucket and you will never see it again.  In return, you will receive a key in order to retrieve a treasure uploaded by another user.  Call it a one-to-one exchange.</p>
            <div className="key-pocket">
              <button type="button" className="upload-buttons" onClick={() => openModal({ photo: -1 })}>
                Upload a photo!
              </button>
              <button type="button" className="upload-buttons" onClick={() => openModal({ type: 'Share a quote!' })}>
                Share a quote!
              </button>

              <button type="button" className="upload-buttons" onClick={() => openModal({ type: 'Recommend a book!' })}>
                Recommend book!
              </button>

              <button type="button" className="upload-buttons" onClick={() => openModal({ type: 'Link a song!' })}>
                Link a song!
              </button>

              <button type="button" className="upload-buttons" onClick={() => openModal({ type: 'Recommend event!' })}>
                Suggest event!
              </button>

              <button type="button" className="upload-buttons" onClick={() => openModal({ type: 'Tell a story' })}>
                Tell a story!
              </button>

            </div>
            <br />
            <div className="key-pocket">
              Use a key to open a treasure chest!
              <br />
              Your Keys:  #
              {keyCount}
              { keyAccess() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TreasureIsland;
