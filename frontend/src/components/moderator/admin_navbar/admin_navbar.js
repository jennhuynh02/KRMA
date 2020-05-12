import React from 'react';

class AdminNavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    // getLinks() {
    //     if (this.props.loggedIn) {
    //         return (
    //             <div className="page-navbar">                    
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>                    
    //                 <h1 className="session-navbar">Welcome to Treasure Island!</h1>
    //             </div>                
    //         )
    //     }
    // }

    render() {
        return (
            <div>
              <button>Treasure Box Contents</button>
              <button>Flagged Item Reports Inbox</button>
              <button>All Users</button>
            </div>
        );
    }
}

export default AdminNavBar;