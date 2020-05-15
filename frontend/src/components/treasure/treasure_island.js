import React from 'react';
import Modal from '../modal/modal';

class TreasureIsland extends React.Component {
  constructor(props) {
    super(props)
    const {openModal} = this.props;

    this.getTreasure = this.getTreasure.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  getTreasure(e) {
    e.preventDefault();
    window.location.href = "/#/treasureisland";
    this.props.openModal({ retrieve: -1 });
    this.props.currentUser.keyCount -= 1;
  }


  render() {
    const { openModal, currentUser, keyCount } = this.props;

    const keyAccess = () => {
      if (keyCount > 0) {
        return (
          <div>
            <img className="key" src="TreasureKey.jpg" onClick={this.getTreasure} />
          </div>
        )
      } else {
        return (
          <img className="key" src="TreasureKey.jpg" />
        )
      }
    }

    return (
      <div className="treasure-island">
          <Modal />
      <h1 className="island-header">Welcome to Treasure Island</h1>
      <div className="treasure-island-body">
        {/* <img className="chest" src="TreasureChest.png" /> */}
        <div className="bucket-box">
            <p className="bucket-explanation">Upload a photo, where it will go into an AWS bucket and you never see it again.  In return, you will receive a key to retrieve a treasure uploaded by another user.  Call it a one-to-one exchange.</p>
          <div className="key-pocket">
          <button className="upload-buttons" onClick={() => openModal({ photo: -1 })}>
            Upload a photo!
          </button>
          <button className="upload-buttons" onClick={() => openModal({ quote: -1 })}>
            Share a quote!
          </button>

          <button className="upload-buttons" onClick={() => openModal({ quote: -1 })}>
            Recommend book!
          </button>

          <button className="upload-buttons" onClick={() => openModal({ quote: -1 })}>
            Link a song!
          </button>

          <button className="upload-buttons" onClick={() => openModal({ quote: -1 })}>
            Suggest event!
          </button>

          <button className="upload-buttons" onClick={() => openModal({ quote: -1 })}>
            Tell a story!
          </button>

          </div>
          <br />
          <div className="key-pocket">
            Use a key to open a treasure chest!
            <br />
              Your Keys:  #{keyCount}
              { keyAccess() }
      </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TreasureIsland;