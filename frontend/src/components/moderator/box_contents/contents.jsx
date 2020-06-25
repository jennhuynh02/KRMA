// TBD

import React from 'react';
import AdminItemContainer from './admin_item_container';
import AdminNavBar from '../../adminbar/admin_bar_container';

class TreasureContentsPage extends React.Component {
  componentDidMount() {
    const { getAllTreasures } = this.props;
    getAllTreasures();
  }

  render() {
    const { allTreasures } = this.props;
    return (
      <div className="contents-page">
        <AdminNavBar />
        <h1 className="contents-header">All Karma</h1>
        <div className="the-collection">
          {allTreasures.map((treasure) => (
            <AdminItemContainer key={treasure._id} treasure={treasure} />
          ))}
        </div>
      </div>
    );
  }
}

export default TreasureContentsPage;
