import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/modal';

class TreasureIsland extends React.Component {

  render() {
    const { openModal } = this.props;

    const treasureLinks = () => (
      <div className="treasure-links">
        <button className="session-buttons" onClick={() => openModal('upload')}>
          Upload treasure and receive a key!
        </button>
        <button className="session-buttons" onClick={() => openModal('retrieve')}>
          Use a key to open a treasure chest!
        </button>
      </div> 
    )

    return (
      <div className="treasure-island">
        <div>
          <h1 className="island-header">Welcome to Treasure Island</h1>
          <Link to={"/collection"}>View Collection</Link>
        </div>
        <div className="treasure-island-body">
          <Modal />
          {treasureLinks()}
        </div>
      </div>
    );
  }
}

export default TreasureIsland;