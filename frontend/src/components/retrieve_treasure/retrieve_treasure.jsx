import React from 'react';
import ImageContainer from '../image/image_container';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const { currentTreasure, openModal, closeModal } = this.props;
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
        <button>Report Treasure</button>
        <br />
      </div>
    );
  }
}

export default RetrieveTreasure;
