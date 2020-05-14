import React from 'react';
import { editTreasure } from '../../actions/treasure_actions';

class ReportTreasure extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.treasure;
        this.handleReport = this.handleReport.bind(this);
    }

    change(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleReport(e) {
        e.preventDefault();
        const treasure = this.state;
        treasure.reported = true;
        debugger
        this.props.editTreasure(treasure);
            // .then(this.props.closeModal); OR message saying report received
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleReport}>
                    <input className="report-input"
                        type="textarea"
                        value={this.state.reportMessage}
                        placeholder="Please enter details here"
                        onChange={this.change('reportMessage')}
                    />
                    <button>Submit Report</button>
                </form>
            </div>
        );
    }
}

export default ReportTreasure;