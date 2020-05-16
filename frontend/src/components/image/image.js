import React from 'react';

class Image extends React.Component {
  render() {
    const { treasure, imgUrl, deleteTreasure, closeModal } = this.props;
    let id;
    id = treasure._id;
    return (
      <div>
        <button onClick={closeModal}>X</button>
        <img src={imgUrl} alt="img" />
        {/* <button className="admin-delete-content" onClick={() => deleteTreasure(id)}>Delete This</button> */}
      </div>
    );
  }
}

export default Image;
