import React from 'react';

class ReportTreasure extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.treasure;
        this.handleReport = this.handleReport.bind(this);
    }

    change(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // either updateTreasure will be passed in as props or will have to do all logic here:
        // (set reported value in DB to true)
        // (set reportMessage in DB to this.state.reportMessage)
            // .then(this.props.closeModal);
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