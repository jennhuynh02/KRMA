import React from 'react';

class RetrieveTreasure extends React.Component {
  constructor(props) {
      super(props);

  }
  
  componentDidMount() {
    const { fetchTreasure, currentUser } = this.props;
    console.log(currentUser)
    fetchTreasure(currentUser.id);
    
  }
  
  // addOwnerId() {
  //   const { currentUser, updateTreasure } = this.props;

  //   if (this.props.image._id) {
  //     const treasure = this.props.image;
  //     treasure.ownerId = currentUser.id;
  //     updateTreasure(treasure);
  //   }
  // }

  render() {
    const { image, openModal, closeModal } = this.props;
    // this.addOwnerId();
    return (
      <div className="retrieve-treasure-wrapper">
        <button className="close-modal" onClick={closeModal}>
            X
        </button>
        <img className="content-img-rt" src={ image.url }/>
        <button className="report-treasure-button">Report Treasure</button>
        <br />

      </div>
    );
  }
}

export default RetrieveTreasure;