import React from 'react';

class AdminItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTreasure(this.props.treasure._id);
    window.location.reload();
  }

  render() {
    const { treasure, imgUrl, deleteTreasure } = this.props
    let id
    id = treasure._id
    return (
    <div className="content-item">
      <img className="content-img" src={ imgUrl } />
      <button className="admin-delete-content" onClick={this.handleDelete}>Delete This</button>
    </div>
    );
  }
}

export default AdminItem;