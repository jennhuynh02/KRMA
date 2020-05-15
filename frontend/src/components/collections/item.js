import React from 'react';

class TreasureItem extends React.Component {
  render() {
    const { treasure, imgUrl, deleteTreasure } = this.props
    let id
    id = treasure._id
    return (
    <div className="content-item">
      <img className="content-img-rt" src={ imgUrl } />
      <button className="admin-delete-content" onClick={() => deleteTreasure(id)}>Delete This</button>
    </div>
    );
  }
}

export default TreasureItem;