import React from 'react';
import Modal from '../../modal/modal';

class AdminItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTreasure(this.props.treasure._id);
    window.location.reload();
  }

  render() {
    const {
      treasure, imgUrl, deleteTreasure, openModal, closeModal,
    } = this.props;
    let id;
    id = treasure._id;
    let content;
    if (treasure.type === 'media') {
      content = <img className="content-img" src={treasure.url} onClick={(e) => openModal({ image: treasure })} />;
    } else {
      content = <h1 className="treasure-text">{ treasure.url }</h1>;
    }
    return (
      <div className="content-item">
        {content}
        <br />
        <button className="admin-delete-content" onClick={this.handleDelete}>Discard Treasure</button>
      </div>
    );
  }
}

export default AdminItem;
