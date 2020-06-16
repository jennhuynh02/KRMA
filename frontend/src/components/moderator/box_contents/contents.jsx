import React from 'react';
import AdminItemContainer from './admin_item_container';
import AdminNavBar from '../../adminbar/admin_bar_container';
import NavBarContainer from '../../navbar/navbar_container';

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
        <NavBarContainer />
        <h1 className="contents-header">Everything Inside the Treasure Box</h1>
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
