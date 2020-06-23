import React from 'react';

class Image extends React.PureComponent {
  render() {
    const {
      treasure, imgUrl, deleteTreasure, closeModal,
    } = this.props;
    const id = treasure._id;
    return (
      <div>
        <img src={imgUrl} alt="img" />
      </div>
    );
  }
}

export default Image;
