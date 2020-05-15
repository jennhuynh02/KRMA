import React from 'react';

class Image extends React.Component {
  render() {
    const { treasure, imgUrl, deleteTreasure } = this.props
    let id
    id = treasure._id
    return (
    <div>
      <img src={ imgUrl } />
      {/* <button className="admin-delete-content" onClick={() => deleteTreasure(id)}>Delete This</button> */}
    </div>
    );
  }
}

export default Image;