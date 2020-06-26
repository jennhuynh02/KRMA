import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import AdminBarContainer from '../admin/adminbar/admin_bar_container';

class Main extends React.Component {
  componentDidMount() {
    const { getCurrentUser, currentUser } = this.props;
    getCurrentUser(currentUser._id);
  }

  render() {
    const { currentUser, openModal } = this.props;

    return (
      <div className="main">
        {(currentUser.email === 'admin@krma.com'
          ? <AdminBarContainer />
          : <NavBarContainer />
        )}
        <div className="main-instructions" onClick={() => openModal({instructions: -1})}>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Main;
