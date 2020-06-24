import React from 'react';
import UserContainer from './u_container';
import NavBarContainer from '../../navbar/navbar_container';
import AdminBarContainer from '../../adminbar/admin_bar_container';

class UsersPage extends React.Component {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { allUsers } = this.props;
    return (
      <div className="users-page">
        <NavBarContainer />
        <AdminBarContainer />
        <h1 className="users-page-header">All Treasure Box Users</h1>
        {/* <button onClick={() => this.props.resetOwners()}> Reset all Owner Ids </button> */}
        <ol className="all-users">
          {allUsers.map((user) => (
            <UserContainer key={user._id} user={user} />
          ))}
        </ol>
      </div>
    );
  }
}

export default UsersPage;
