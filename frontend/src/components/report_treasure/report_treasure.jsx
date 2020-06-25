import React from 'react';

class ReportTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportMessage: '',
      error: '',
    };

    this.handleReport = this.handleReport.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return (e) => this.setState({ reportMessage: e.target.value });
  }

  handleReport(e) {
    e.preventDefault();
    const { updateFullTreasure, treasure, closeModal } = this.props;
    const { reportMessage } = this.state;
    if (reportMessage.length > 10) {
      const newTreasure = { ...treasure };
      newTreasure.reported = true;
      newTreasure.reportMessage = reportMessage;
      updateFullTreasure(newTreasure);
      closeModal();
    } else {
      this.setState({ error: '10 character minimum' });
    }
    // .then(this.props.closeModal); OR message saying report received
  }

  render() {
    const { closeModal } = this.props;
    const { reportMessage, error } = this.state;
    return (
      <div className="report-container">
        <div className="report-title">
          <span>
            We're sorry this happened. Please let us know why this Karma is inappropriate.
          </span>
        </div>
        <div className="add-report-input">
          <textarea
            value={reportMessage}
            placeholder="Please enter details here"
            onChange={this.handleChange}
          />
          <div className="add-report-button-container">
            <button type="button" onClick={this.handleReport}>Report</button>
            <button type="button" onClick={(e) => closeModal(e)}>Cancel</button>
          </div>
        </div>
        <span className="add-report-errors">{error}</span>
      </div>
    );
  }
}

export default ReportTreasure;
