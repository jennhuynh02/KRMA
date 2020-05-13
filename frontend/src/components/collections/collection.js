import React from 'react';

class Collection extends React.Component {
  render() {
    return (
    <div className="collection-page">
      <h1 className="collection-header">{this.props.firstName}'s Treasures</h1>
      <div className="the-collection">
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
        <p className="collection-item">Treasure Item</p>
      </div>
    </div>
    );
  }
}

export default Collection;