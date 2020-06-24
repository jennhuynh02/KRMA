import React from 'react';
import ReportedTreasureContainer from './reports/reported_treasure_container';
import NavBarContainer from '../../navbar/navbar_container';
import AdminBarContainer from '../../adminbar/admin_bar_container';

class ReportsPage extends React.Component {
  componentDidMount() {
    const { fetchTreasures } = this.props;
    fetchTreasures();
  }

  render() {
    const { treasures } = this.props;
    return (
      <div className="report-page">
        <AdminBarContainer />
        <NavBarContainer />
        <h1 className="reports-page-header">
          Review for deletion.
        </h1>
        <div className="the-collection">
          { treasures.map((treasure) => (treasure.reported ? <ReportedTreasureContainer key={treasure._id} treasure={treasure} /> : null))}
        </div>
      </div>
    );
  }
}

export default ReportsPage;
