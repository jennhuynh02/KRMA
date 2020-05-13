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

    handleContentsButton(e) {
        e.preventDefault();
        window.location.href = "/#/contents"
    }
    handleReportsButton(e) {
        e.preventDefault();
        window.location.href = "/#/reports"
    }
    handleUsersButton(e) {
        e.preventDefault();
        window.location.href = "/#/users"
    }
    handleTreasurePageButton(e) {
        e.preventDefault();
        window.location.href = "/#/treasureisland"
    }
    handleCollectionPageButton(e) {
        e.preventDefault();
        window.location.href = "/#/collection"
    }

    getLinks() {
        if(this.props.loggedIn && (this.props.user.email === 'admin@treasurebox.com')) {
            return (
                <div className="page-navbar">                    
                    <button className="session-buttons" onClick={this.handleContentsButton}>Contents</button>
                    <button className="session-buttons" onClick={this.handleReportsButton}>Reports</button>
                    <button className="session-buttons" onClick={this.handleUsersButton}>Users</button>
                    <button className="session-buttons" onClick={this.logoutUser}>Log Out</button>
                </div>
            );
        } else if (this.props.loggedIn) {
            return (
                <div className="page-navbar">
                    <img className="nav-collection" src="IconTreasureMap.jpg" onClick={this.handleTreasurePageButton} />                   
                    <img className="nav-collection" src="TreasureBoxHeader.jpg" onClick={this.handleCollectionPageButton} />                   
                    <img className="nav-collection" src="LogoutShip.jpg" onClick={this.logoutUser} />                   
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