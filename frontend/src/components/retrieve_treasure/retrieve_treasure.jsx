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
    this.handleTreasure = this.handleTreasure.bind(this);
    this.showReport = this.showReport.bind(this);
  }

  componentDidMount() {
    const { fetchTreasure, currentUser, fetchCurrentUser } = this.props;
    fetchTreasure(currentUser._id)
      .then(() => fetchCurrentUser(currentUser._id));
  }

  componentWillUnmount() {
    const { fetchUserTreasures, currentUser, fetchTreasure } = this.props;
    this.handleTreasure();
    fetchTreasure(currentUser._id);
    fetchUserTreasures(currentUser._id);
  }

  handleTreasure() {
    const { updateFullTreasure, currentTreasure, currentUser } = this.props;
    const newTreasure = { ...currentTreasure };
    newTreasure.reportMessage = '';
    newTreasure.reported = false;
    newTreasure.ownerId = currentUser._id;

    updateFullTreasure(newTreasure);
  }

  showReport() {
    this.setState({ inappropriate: true });
  }

  handleReport() {
    const { updateFullTreasure, currentTreasure, closeModal } = this.props;
    const { reportMessage } = this.state;
    if (reportMessage.length > 10) {
      const newTreasure = { ...currentTreasure };
      newTreasure.reported = true;
      newTreasure.reportMessage = reportMessage;
      updateFullTreasure(newTreasure);
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
      creatorId: this.props.currentTreasure.creatorId,
    });
  }

  render() {
    const {
      currentTreasure, openModal, closeModal, report,
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
        <textarea className="report-karma-input" type="text" onChange={this.update()} value={reportMessage} placeholder="Let us know why this is inappropriate or offensive" />
        <div className="add-karma-button-container">
          <div type="submit" onClick={this.handleReport}>
            Report Karma
          </div>
          <span className="add-karma-errors">{error}</span>
        </div>
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
