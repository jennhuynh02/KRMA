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
        <ul>
          {allUsers.map((user) => (
            <UserContainer key={user._id} user={user} />
            ))}
        </ul>
			</div>
		);
	}
}

export default UsersPage;
