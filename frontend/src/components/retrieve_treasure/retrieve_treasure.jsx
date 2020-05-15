import React from 'react';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleTreasure() {
    const { currentUser, updateTreasure, currentTreasure } = this.props;
    if (!currentTreasure.ownerId) {
      const fields = {
        treasure: currentTreasure._id,
        owner: currentUser.id
      }
      updateTreasure(fields);
    }
  }

  componentDidMount() {
    const { fetchTreasure, currentUser } = this.props;
    fetchTreasure(currentUser._id);
  }

  componentWillUnmount(){
    this.handleTreasure()
  }
  
  render() {
    const { currentTreasure, openModal, closeModal } = this.props;
    return (
      <div className="retrieve-treasure-wrapper">
        <button className="close-modal" onClick={closeModal}>
            X
        </button>
        <img className="content-img-rt" src={ currentTreasure.url }/>
        <button>Report Treasure</button>
        <br />
      </div>
    );
  }
}

export default RetrieveTreasure;
