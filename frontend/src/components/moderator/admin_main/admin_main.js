import React from 'react';
import AdminNavBarContainer from "../admin_navbar/admin_navbar_container";

class AdminMainPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
              <AdminNavBarContainer />
              This is the Admin Main Page.
            </div>
        );
    }
}

export default AdminMainPage;