import React from 'react';
import Modal from '../modal/modal';

class TreasureIsland extends React.Component {

  render() {
    const { openModal, currentUser } = this.props;

    let keyCount
    keyCount = currentUser.keyCount;
    
    const treasureLinks = () => (
      <div>

      <h1 className="island-header">Welcome to Treasure Island</h1>
      <div className="treasure-island-body">
        <img className="chest" src="TreasureChest.jpg" />
        <div className="bucket-box">
            <p className="bucket-explanation">Upload a photo, where it will go into an AWS bucket and you never see it again.  In return, you will receive a key to retrieve a treasure uploaded by another user.  Call it a one-to-one exchange.</p>
          <div className="key-pocket">
          <button className="upload-buttons" onClick={() => openModal('photo')}>
            Upload photo!
          </button>
          <br />
          <button className="upload-buttons" onClick={() => openModal('photo')}>
            Share a quote!
          </button>
          </div>
          <br />
          <div className="key-pocket">
            Use a key to open a treasure chest!
            <br />
              Your Keys:  #{keyCount} 
              <img className="key" src="TreasureKey.jpg" onClick={() => openModal('retrieve')}/>
      </div>
          </div>
        </div>
      </div> 
    )

    return (
      <div className="treasure-island">
          <Modal />
        <div>
          {treasureLinks()}
        </div>
      </div>
    );
  }
}

export default TreasureIsland;