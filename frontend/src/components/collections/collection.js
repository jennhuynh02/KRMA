import React from 'react';
import TreasureItemContainer from './item_container';

class Collection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTreasures();
    const { getUserTreasures, currentUser } = this.props;
    getUserTreasures(currentUser._id);
  }

  render() {
    const { allTreasures, userTreasures, admin } = this.props;
    return (
      <div className="collection-page">
        <h1 className="collection-header">
          {this.props.firstName}
          's Treasures
        </h1>
        <div className="the-collection">
          { admin // show user items or admin items?
            ? allTreasures.map((treasure) => (
              <TreasureItemContainer key={treasure._id} treasure={treasure} />
            ))
            : userTreasures.map((treasure) => (
              <TreasureItemContainer key={treasure._id} treasure={treasure} />
            ))}
        </div>
      </div>
    );
  }
}

export default Collection;
