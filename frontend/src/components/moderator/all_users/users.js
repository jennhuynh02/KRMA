import React from 'react';
import UserContainer from './u_container';

class UsersPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
		}
	}

	componentDidMount() {
		const { getAllUsers } = this.props;
		getAllUsers();
	}
	
	render() {
		const { allUsers } = this.props;
		return (
			<div className="users-page">
				<h1 className="users-page-header">All Treasure Box Users</h1>
				<button onClick={() => this.props.resetOwners()}> Reset all Owner Ids </button>
        <div className="the-collection">
          {allUsers.map((user) => (
            <UserContainer key={user._id} user={user} />
            ))}
        </div>
			</div>
		);
	}
}

export default UsersPage;
