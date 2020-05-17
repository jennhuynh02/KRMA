import React from 'react';
import Modal from '../modal/modal';

class TreasureItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const { deleteTreasure, fetchTreasures, treasure } = this.props;
    e.preventDefault();
    deleteTreasure(treasure._id);
    fetchTreasures();
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
      content = <h1>{ treasure.url }</h1>;
    }

    return (
      <div>
        <div className="content-item">
          <Modal />
          { content }
            <button className="collection-item-buttons" onClick={this.handleDelete}>Delete This</button>
        </div>
      </div>
    );
  }
}

export default TreasureItem;
