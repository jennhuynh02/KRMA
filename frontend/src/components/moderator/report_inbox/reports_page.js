import React from 'react';
import AdminItemContainer from '../box_contents/admin_item_container';

class ReportsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTreasures();
    }

    render() {
        const { treasures } = this.props;
        return (
            <div className="report-page" >
                <h1 className="reports-page-header">
                  Review for deletion.
                </h1>
                { treasures.map(treasure => 
                    treasure.reported ? <AdminItemContainer treasure={treasure} /> : null
                )}
            </div>
        );
    }
}

export default ReportsPage;
