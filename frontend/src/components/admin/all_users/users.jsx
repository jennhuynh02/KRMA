import React from 'react';
import UserContainer from './user_item_container';
import AdminBarContainer from '../adminbar/admin_bar_container';

class UsersPage extends React.Component {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { allUsers } = this.props;
    console.log(allUsers)
    return (
      <div className="all-users-main">
        <AdminBarContainer />
        <h1>All Users</h1>
        {/* <button onClick={() => this.props.resetOwners()}> Reset all Owner Ids </button> */}
        <div>
          <ul className="all-users">
            {allUsers.map((user) => (
              <li key={user.email}><UserContainer user={user} /></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UsersPage;
