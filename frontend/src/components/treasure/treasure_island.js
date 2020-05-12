import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/modal';

class TreasureIsland extends React.Component {

  render() {
    const { openModal } = this.props;

    const treasureLinks = () => (
      <div className="treasure-links">
        <a className="upload-treasure" onClick={() => openModal('upload')}>
          Upload treasure and receive a key!
        </a>
        <a className="retrieve-treasure" onClick={() => openModal('retrieve')}>
          Use a key to open a treasure chest!
        </a>
      </div> 
    )

    return (
      <div className="treasure-island">
        <div className="treasure-island-header">
          <h1>Welcome to Treasure Island</h1>
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