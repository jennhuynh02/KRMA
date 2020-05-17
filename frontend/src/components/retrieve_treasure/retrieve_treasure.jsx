import React from 'react';
import ImageContainer from '../image/image_container';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.currentTreasure._id,
      creatorId: this.props.currentTreasure.creatorId,
      date: this.props.currentTreasure.date,
      ownerId: this.props.currentTreasure.ownerId,
      reportMessage: "",
      reported: this.props.currentTreasure.reported,
      type: this.props.currentTreasure.type,
      url: this.props.currentTreasure.url,
    }
    this.handleReport = this.handleReport.bind(this);
    this.handleTreasure = this.handleTreasure.bind(this);
  }

  handleTreasure() {
    const { currentUser, updateTreasure, currentTreasure } = this.props;
    const assignId = {
      treasure: currentTreasure._id,
      owner: currentUser.id,
    };
    updateTreasure(assignId);
  }

  componentDidMount() {
    const { fetchTreasure, currentUser } = this.props;
    fetchTreasure(currentUser.id);
  }

  componentWillUnmount() {
    this.handleTreasure();
  }

  handleReport() {
    const { updateFullTreasure } = this.props;
    const newTreasure = this.state;
    updateFullTreasure(newTreasure);
  }

  update() {
    return (e) => this.setState({
      reportMessage: e.currentTarget.value,
      reported: true,
    })
  }

  render() {
    const { currentTreasure, openModal, closeModal, report } = this.props;
    let content;
    if (currentTreasure.type === 'media') {
      content = <ImageContainer treasure={currentTreasure} />;
    } else {
      content = <h1 className="treasure-text">{ currentTreasure.url }</h1>;
    }
    
    return (
      <div className="retrieve-treasure-wrapper">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        { content }
        <br />
        <input type="text" onChange={this.update()} value={this.state.reportMessage} />
        <button type="submit" onClick={this.handleReport}>Report Treasure</button>
      </div>
    );
  }
}

export default RetrieveTreasure;
