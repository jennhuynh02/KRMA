import React from 'react';
import Modal from '../modal/modal';

class TreasureIsland extends React.Component {

  render() {
    const { openModal, currentUser } = this.props;

    let keyCount
    keyCount = currentUser.keyCount;

    return (
      <div className="treasure-island">
          <Modal />
      <h1 className="island-header">Welcome to Treasure Island</h1>
      <div className="treasure-island-body">
        <img className="chest" src="TreasureChest.jpg" />
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
              <img className="key" src="TreasureKey.jpg" onClick={() => openModal({ retrieve: -1 })}/>
      </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TreasureIsland;