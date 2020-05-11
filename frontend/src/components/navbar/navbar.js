import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div>
                <span>Treasure Box</span>
                <div>
                    <Link to={'/collection'}>View Collection</Link>
                    <button onClick={this.logoutUser}>Log Out</button>
                </div>
            </div>
        );
    }
}

export default NavBar;