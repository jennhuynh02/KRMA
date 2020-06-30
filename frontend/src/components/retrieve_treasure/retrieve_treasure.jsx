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
    // const { currentUser, updateTreasure, currentTreasure } = this.props;
    const { updateFullTreasure } = this.props;
    const newTreasure = {
      _id: this.props.currentTreasure._id,
      creatorId: this.props.currentTreasure.creatorId,
      date: this.props.currentTreasure.date,
      ownerId: this.props.currentUser._id,
      reportMessage: '',
      reported: false,
      type: this.props.currentTreasure.type,
      url: this.props.currentTreasure.url,
    };
    debugger;

    updateFullTreasure(newTreasure);
  }

  showReport() {
    this.setState({ inappropriate: true });
  }

  handleReport() {
    const { updateFullTreasure, currentTreasure, closeModal } = this.props;
    const { reportMessage } = this.state;
    // const newTreasure = {
    //   _id: this.props.currentTreasure._id,
    //   creatorId: this.props.currentTreasure.creatorId,
    //   date: this.props.currentTreasure.date,
    //   ownerId: this.props.currentTreasure.ownerId,
    //   reportMessage: this.state.reportMessage,
    //   reported: true,
    //   type: this.props.currentTreasure.type,
    //   url: this.props.currentTreasure.url,
    // };
    // const newTreasure = this.props.currentTreasure;
    // newTreasure.reportMessage = reportMessage;
    // newTreasure.reported = true;

    if (reportMessage.length > 10) {
      const newTreasure = { ...currentTreasure };
      newTreasure.reported = true;
      newTreasure.reportMessage = reportMessage;
      debugger;
      updateFullTreasure(newTreasure);
      closeModal();
    } else {
      this.setState({ error: '10 character minimum' });
    }

    window.location.reload();
    // updateFullTreasure(newTreasure);
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
        <textarea className="report-karma-input" type="text" onChange={this.update()} value={reportMessage} placeholder="Please include reason for report:" />
        <div className="add-karma-button-container">
          <div type="submit" onClick={this.handleReport}>
            Report Karma
          </div>
          {error}
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
