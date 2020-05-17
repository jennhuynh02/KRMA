import React from 'react';

class Image extends React.Component {
  render() {
    const { treasure, imgUrl, deleteTreasure, closeModal } = this.props;
    let id;
    id = treasure._id;
    return (
      <div>
        <img src={imgUrl} alt="img" />
      </div>
    );
  }
}

export default Image;
