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
                    <button className="admin-nav-buttons" onClick={this.handleContentsButton}>All Treasure Contents</button>
                    <button className="admin-nav-buttons" onClick={this.handleReportsButton}>All Flagged Reports</button>
                    <button className="admin-nav-buttons" onClick={this.handleUsersButton}>Treasure Box Users</button>
                    <div className="nav-item">
                        <img alt="Treasure Island" title="Treasure Island" className="nav-icon" src="IconTreasureMap.jpg" onClick={this.handleTreasurePageButton} />
                        <p>Treasure</p>                       
                    </div>
                    <div className="nav-item">
                        <img alt="Treasure Collection" title="Treasure Collection" className="nav-icon" src="TreasureBoxHeader.jpg" onClick={this.handleCollectionPageButton} />                   
                        <p>Collection</p>  
                    </div>
                    <div className="nav-item">
                        <img alt="Sail Away!!!" title="Logout" className="nav-icon" src="LogoutShip.jpg" onClick={this.logoutUser} />                   
                        <p>Logout</p>
                    </div>
                </div>
            );
        } else if (this.props.loggedIn) {
            return (
                <div className="page-navbar">
                    <div className="nav-item">
                        <img alt="Treasure Island" title="Treasure Island" className="nav-icon" src="IconTreasureMap.jpg" onClick={this.handleTreasurePageButton} />
                        <p>Treasure</p>                       
                    </div>
                    <div className="nav-item">
                        <img alt="Treasure Collection" title="Treasure Collection" className="nav-icon" src="TreasureBoxHeader.jpg" onClick={this.handleCollectionPageButton} />                   
                        <p>Collection</p>  
                    </div>
                    <div className="nav-item">
                        <img alt="Sail Away!!!" title="Logout" className="nav-icon" src="LogoutShip.jpg" onClick={this.logoutUser} />                   
                        <p>Logout</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="session-navbar">                    
                    <h1>Welcome to Treasure Island!</h1>
                </div>                
            )
        }
    }

    render() {
        return (
            <div className="navbar-wrapper">
            { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;