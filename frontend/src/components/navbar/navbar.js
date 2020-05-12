import React from 'react';

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
        if(this.props.loggedIn && (this.props.user.email === 'admin@treasurebox.com')) {
            return (
                <div className="page-navbar">                    
                    <button className="session-buttons" onClick={this.logoutUser}>Log Out</button>
                    {/* <button className="session-buttons" onClick={this.logoutUser}>Log Out</button>
                    <button className="session-buttons" onClick={this.logoutUser}>Log Out</button>
                    <button className="session-buttons" onClick={this.logoutUser}>Log Out</button> */}
                </div>
            );
        } else if (this.props.loggedIn) {
            return (
                <div className="page-navbar">                    
                    <button className="session-buttons" onClick={this.logoutUser}>Log Out</button>
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