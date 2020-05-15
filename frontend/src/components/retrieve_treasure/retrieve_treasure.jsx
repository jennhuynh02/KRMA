import React from 'react';

class RetrieveTreasure extends React.Component {
  constructor(props) {
      super(props);

      this.state = { keyCount: this.props.keyCount };
      // Need keycount slice of state?
  }
  
  componentDidMount() {
    const { fetchTreasure, currentUser } = this.props;
    fetchTreasure(currentUser.id);
  }
  
  addOwnerId() {
    const { currentUser, editTreasure } = this.props;

    if (this.props.image._id) {
      const treasure = this.props.image;
      treasure.ownerId = currentUser.id;
      editTreasure(treasure);
    }
  }

  render() {
    const { image, openModal, closeModal } = this.props;
    this.addOwnerId();
    return (
      <div className="retrieve-treasure-wrapper">
        <button className="close-modal" onClick={closeModal}>
            X
        </button>
        <img className="content-img-rt" src={ image.url }/>
        <button>Report Treasure</button>
        <br />

      </div>
    );
  }
}

export default RetrieveTreasure;