import React from 'react';

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
		return (
			<div>
				This is the Users Page for admin.
			</div>
		);
	}
}

export default UsersPage;
