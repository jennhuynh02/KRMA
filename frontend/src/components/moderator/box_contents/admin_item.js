import React from 'react';

class AdminItem extends React.Component {
  render() {
    const { treasure, imgUrl, deleteTreasure } = this.props
    let id
    id = treasure._id
    return (
    <div>
      <img className="content-item" src={ imgUrl } />
      <button onClick={() => deleteTreasure(id)}>Delete This</button>
    </div>
    );
  }
}

export default AdminItem;