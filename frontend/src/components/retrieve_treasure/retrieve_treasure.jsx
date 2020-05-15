import React from 'react';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleTreasure() {
    const { currentUser, updateTreasure, currentTreasure } = this.props;
    const assignId = {
      treasure: currentTreasure._id,
      owner: currentUser.id
    }
    updateTreasure(assignId);
  }

  componentDidMount() {
    const { fetchTreasure, currentUser } = this.props;
    fetchTreasure(currentUser.id);
  }

  componentWillUnmount() {
    this.handleTreasure()
  }
  
  render() {
    const { currentTreasure, openModal, closeModal } = this.props;
    let content

    if (currentTreasure.type === "media") {
      content = <img className="content-img-rt" src={ currentTreasure.url }/>
    } else if (currentTreasure.type ==="quote") {
      content = <h1 className="treasure-text">{ currentTreasure.url }</h1>
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
