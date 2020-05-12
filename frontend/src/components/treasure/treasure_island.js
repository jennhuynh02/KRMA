import React from 'react';
import { Link } from 'react-router-dom';

class TreasureIsland extends React.Component {
  render() {
    return (
    <div className="treasure-island">
      <h1 className="island-header">Treasure Island Page</h1>
      <Link to={'/collection'}>View Collection</Link>
    <div className="treasure-island-page">
    </div>
    </div>
    );
  }
}

export default TreasureIsland;