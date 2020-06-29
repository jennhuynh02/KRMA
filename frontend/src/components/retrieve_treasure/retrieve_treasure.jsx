import React from 'react';
import ImageContainer from '../image/image_container';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inappropriate: false,
      reportMessage: '',
      reported: false,
    };
    this.handleReport = this.handleReport.bind(this);
    this.handleTreasure = this.handleTreasure.bind(this);
    this.showReport = this.showReport.bind(this);
  }

  componentDidMount() {
    const { fetchTreasure, currentUser, fetchCurrentUser } = this.props;
    fetchTreasure(currentUser._id);
  }

  componentWillUnmount() {
    const { fetchCurrentUser, currentUser } = this.props;
    this.handleTreasure();
    fetchCurrentUser(currentUser._id);
  }

  handleTreasure() {
    // const { currentUser, updateTreasure, currentTreasure } = this.props;
    const { updateTreasure } = this.props;
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

    updateTreasure(newTreasure);
  }

  showReport() {
    this.setState({ inappropriate: true });
  }

  handleReport() {
    const { updateFullTreasure } = this.props;
    const newTreasure = {
      _id: this.props.currentTreasure._id,
      creatorId: this.props.currentTreasure.creatorId,
      date: this.props.currentTreasure.date,
      ownerId: this.props.currentTreasure.ownerId,
      reportMessage: this.state.reportMessage,
      reported: true,
      type: this.props.currentTreasure.type,
      url: this.props.currentTreasure.url,
    };
    window.location.reload();
    updateFullTreasure(newTreasure);
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
    const { reportMessage } = this.state;
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
          </div>
        </div>
    );

    return (
      <div className="content-main">
        { content }
        { this.state.inappropriate ? reportBox()
          : (
            <div className="add-karma-input">
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
