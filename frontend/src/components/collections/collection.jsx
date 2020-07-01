import React from 'react';
import AdminBarContainer from '../admin/adminbar/admin_bar_container';
import ItemContainer from './item_container';
import NavBarContainer from '../navbar/navbar_container';

class Collection extends React.Component {
  componentDidMount() {
    const {
      getAllTreasures, getUserTreasures, getCurrentUser, currentUser
    } = this.props;
    getAllTreasures();
    getUserTreasures(currentUser._id);
    getCurrentUser(currentUser._id);
  }

  scrollToTop() {
    document.getElementById('navbar-id').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const {
      allTreasures, userTreasures, admin, openModal
    } = this.props;

    return (
      <div className="collection-page-container">
        {(admin ? <AdminBarContainer /> : <NavBarContainer />)}
        <div className="collection-header">
          {(admin ? <h1>All Karma</h1> : <h1>Your Karma Collection</h1>)}
        </div>
        <div className="collection-contents">
          { admin
            ? allTreasures.map((treasure) => (
              <ItemContainer key={treasure._id} treasure={treasure} admin={admin} />
            ))
            : userTreasures.map((treasure) => (
              <ItemContainer key={treasure._id} treasure={treasure} admin={admin} />
            ))}
        </div>
        <div className="main-instructions" onClick={() => openModal({instructions: -1})}>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </div>
        <div className="scroll" onClick={() => this.scrollToTop()}>
          <i className="fa fa-arrow-up" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Collection;
