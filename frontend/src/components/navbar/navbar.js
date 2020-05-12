import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>                    
                    <Link to={'/collection'}>View Collection</Link>
                    <button onClick={this.logoutUser}>Log Out</button>
                </div>
            );
        } else {
            return (
                <div>                    
                    <h1 className="session-navbar">Welcome to Treasure Island!</h1>
                </div>                
            )
        }
    }

    render() {
        return (
            <div>
            { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;