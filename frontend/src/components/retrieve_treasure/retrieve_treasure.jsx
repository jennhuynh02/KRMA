import React from 'react';
import ImageContainer from '../image/image_container';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inappropriate: false,
      reportMessage: '',
      reported: false,
      error: '',
    };
    this.handleReport = this.handleReport.bind(this);
    this.updateOwnerId = this.updateOwnerId.bind(this);
    this.showReport = this.showReport.bind(this);
  }

  componentDidMount() {
    const { fetchTreasure, currentUser, fetchCurrentUser } = this.props;
    fetchTreasure(currentUser._id)
      .then(() => fetchCurrentUser(currentUser._id));
  }

  componentWillUnmount() {
    const { fetchUserTreasures, currentUser } = this.props;
    this.updateOwnerId();
    fetchUserTreasures(currentUser._id);
  }

  updateOwnerId() {
    const { updateTreasure, currentTreasure, currentUser } = this.props;
    const newTreasure = { ...currentTreasure };
    newTreasure.ownerId = currentUser._id;
    updateTreasure(newTreasure);
  }

  showReport() {
    const { inappropriate } = this.state;
    this.setState({ inappropriate: !inappropriate });
  }

  handleReport() {
    const { updateTreasure, currentTreasure, closeModal } = this.props;
    const { reportMessage } = this.state;
    if (reportMessage.length > 10) {
      const newTreasure = { ...currentTreasure };
      newTreasure.reported = true;
      newTreasure.reportMessage = reportMessage;
      updateTreasure(newTreasure);
      closeModal();
      window.location.reload();
    } else {
      this.setState({ error: '10 character minimum' });
    }
  }

  update() {
    return (e) => this.setState({
      reportMessage: e.currentTarget.value,
      reported: true,
      // creatorId: this.props.currentTreasure.creatorId,
    });
  }

  render() {
    const {
      currentTreasure, closeModal,
    } = this.props;
    const { reportMessage, inappropriate, error } = this.state;
    let content;
    if (currentTreasure) {
      if (currentTreasure.type === 'media') {
        content = <ImageContainer treasure={currentTreasure} />;
      } else {
        content = <h1 className="karma-text">{ currentTreasure.url }</h1>;
      }
    }

    const reportBox = () => (
      <div className="add-karma-input">
        <textarea className="report-karma-input" type="text" onChange={this.update()} value={reportMessage} placeholder="Please include reason for report:" />
        <div className="add-karma-button-container">
          <div type="submit" onClick={this.handleReport}>
            Report
          </div>
          <div type="submit" onClick={this.showReport}>
            Cancel
          </div>
        </div>
        <span className="add-karma-errors">{error}</span>
      </div>
    );

    return (
      <div className="content-main">
        { content }
        { inappropriate
          ? reportBox()
          : (
            <div className="add-karma-input">
              <span>Please report this karma if you find this content inappropriate.</span>
              <div className="add-karma-button-container">
                <div type="submit" onClick={this.showReport}>
                  Report Karma
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default RetrieveTreasure;
