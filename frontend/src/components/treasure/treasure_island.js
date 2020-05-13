import React from 'react';
import Modal from '../modal/modal';

class TreasureIsland extends React.Component {

  render() {
    const { openModal } = this.props;

    const treasureLinks = () => (
      <div className="treasure-island-body">
        <img className="chest" src="TreasureChest.jpg" />
        <div>
          <button className="treasure-buttons" onClick={() => openModal('photo')}>
            Upload treasure and receive a key!
          </button>
          <br />
          <button className="treasure-buttons" onClick={() => openModal('retrieve')}>
            Use a key to open a treasure chest!
          </button>
        </div>
      </div> 
    )

    return (
      <div className="treasure-island">
          <h1 className="island-header">Welcome to Treasure Island</h1>
          <Modal />
        <div>
          {treasureLinks()}
        </div>
      </div>
    );
  }
}

export default TreasureIsland;