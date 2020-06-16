import React from 'react';

class ReportTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.treasure;
    this.handleReport = this.handleReport.bind(this);
  }

  change(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleReport(e) {
    e.preventDefault();
    const treasure = this.state;
    treasure.reported = true;
    this.props.updateFullTreasure(treasure);
    // .then(this.props.closeModal); OR message saying report received
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleReport}>
          <input
            className="report-input"
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
