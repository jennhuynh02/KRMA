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
    const { updateFullTreasure } = this.props;
    const treasure = this.state;
    treasure.reported = true;
    updateFullTreasure(treasure);
    // .then(this.props.closeModal); OR message saying report received
  }

  render() {
    const { reportMessage } = this.state;
    return (
      <div>
        <form onSubmit={this.handleReport}>
          <input
            className="report-input"
            type="textarea"
            value={reportMessage}
            placeholder="Please enter details here"
            onChange={this.change('reportMessage')}
          />
          <button type="button">Submit Report</button>
        </form>
      </div>
    );
  }
}

export default ReportTreasure;
