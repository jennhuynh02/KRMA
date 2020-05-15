import React from 'react';
import ReportTreasureContainer from "./report_treasure/report_treasure_container";

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
                    treasure.reported ? <ReportTreasureContainer treasure={treasure} /> : null
                )}
            </div>
        );
    }
}

export default ReportsPage;
