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

  handleChange(event) {
    this.setState({ reportMessage: event.target.value });
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
      // <div className="add-report-container">
      //   <div className="add-report-title">
      //     <span>
      //       We&#39;re sorry this happened. Please let us know why this Karma is inappropriate.
      //     </span>
      //   </div>
      //   <div className="add-report-input">
      //     <textarea
      //       value={reportMessage}
      //       placeholder="Please enter details here"
      //       onChange={this.handleChange}
      //     />
      //     <div className="add-report-button-container">
      //       <button type="button" onClick={this.handleReport}>Report</button>
      //       <button type="button" onClick={(e) => closeModal(e)}>Cancel</button>
      //     </div>
      //   </div>
      //   <span className="add-report-errors">{error}</span>
      // </div>

      <div className="add-karma-main">
        <div className="add-karma-left">
          <img src="rocks.jpg" alt="rocks" />
        </div>
        <div className="add-karma-right">
          <div onClick={() => closeModal()}>
            <i className="fa fa-close"></i>
          </div>
          <div className="add-karma-title">
            <h3>Report a Karma</h3>
          </div>
          <div className="add-karma-input">
            <div className="add-karma-desc">
              <textarea
                value={reportMessage}
                onChange={this.handleChange}
                placeholder="We&#39;re sorry this happened. Please let us know why this Karma is inappropriate."
              />
            </div>
            <div className="add-karma-button-container">
              <div onClick={this.handleReport}>
                Report
              </div>
            </div>
            <span className="add-karma-errors">{error}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportTreasure;
