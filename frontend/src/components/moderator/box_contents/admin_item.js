import React from 'react';

class AdminItem extends React.Component {
  render() {
    const { treasure, imgUrl, deleteTreasure } = this.props
    let id
    id = treasure._id
    return (
    <div className="content-item">
      <img className="content-img" src={ imgUrl } />
      <button className="admin-delete-content" onClick={() => deleteTreasure(id)}>Delete This</button>
    </div>
    );
  }
}

export default AdminItem;