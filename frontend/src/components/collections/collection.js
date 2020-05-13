import React from 'react';
import TreasureItemContainer from "./item_container"

class Collection extends React.Component {
  render() {
    return (
    <div className="collection-page">
      <h1 className="collection-header">{this.props.firstName}'s Treasures</h1>
      <div className="the-collection">
        <TreasureItemContainer />
      </div>
    </div>
    );
  }
}

export default Collection;