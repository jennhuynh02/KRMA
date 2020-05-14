import React from 'react';
import TreasureItemContainer from "./item_container"

class Collection extends React.Component {
  render() {
    const { allTreasures } = this.props
    return (
    <div className="collection-page">
      <h1 className="collection-header">{this.props.firstName}'s Treasures</h1>
        <div className="the-collection">
          {allTreasures.map((treasure) => (
            <TreasureItemContainer key={treasure._id} treasure={treasure} />
            ))}
        </div>
    </div>
    );
  }
}

export default Collection;