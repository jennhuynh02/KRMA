import React from 'react';

class TreasureIsland extends React.Component {
  handleCollectionLink(e) {
    e.preventDefault();
    location.href = "/#/collection";
  }
  render() {
    return (
    <div className="treasure-island">
      <h1 className="island-header">Treasure Island Page</h1>
      <button onClick={this.handleCollectionLink} className="session-buttons">Your Collection</button>
    <div className="treasure-island-page">
    </div>
    </div>
    );
  }
}

export default TreasureIsland;