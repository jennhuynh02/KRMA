import React from 'react';
import AdminBarContainer from '../adminbar/admin_bar_container';
import ItemContainer from './item_container';
import NavBarContainer from '../navbar/navbar_container';

class Collection extends React.Component {
  componentDidMount() {
    const { getAllTreasures, getUserTreasures, currentUser } = this.props;
    getAllTreasures();
    getUserTreasures(currentUser._id);
  }

  render() {
    const {
      allTreasures, userTreasures, admin, firstName
    } = this.props;

    return (
      <div className="collection-page-container">
        <NavBarContainer />
        {(admin ? <AdminBarContainer /> : null)}
        <div className="collection-header">
          <h1>Your Karma Collection</h1>
        </div>
        <div className="collection-contents">
          { admin // show user items or admin items?
            ? allTreasures.map((treasure) => (
              <ItemContainer key={treasure._id} treasure={treasure} />
            ))
            : userTreasures.map((treasure) => (
              <ItemContainer key={treasure._id} treasure={treasure} />
            ))}
        </div>
      </div>
    );
  }
}

export default Collection;
