import React from 'react';
import ReportedTreasureContainer from './reported_karma_container';
import AdminBarContainer from '../adminbar/admin_bar_container';

class ReportsPage extends React.Component {
  componentDidMount() {
    const { fetchTreasures } = this.props;
    fetchTreasures();
  }

  scrollToTop() {
    // let header = document.getElementById("")
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    const { treasures } = this.props;
    return (
      <div className="report-page-container">
        <AdminBarContainer />
        <div className="report-header">
          <h1>Reported</h1>
        </div>
        <div className="report-contents">
          { treasures.map((treasure) => (treasure.reported
            ? <ReportedTreasureContainer key={treasure._id} treasure={treasure} />
            : null))}
        </div>
        <div className="scroll" onClick={() => this.scrollToTop()}>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default ReportsPage;
