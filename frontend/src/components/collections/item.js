import React from 'react';
import Modal from '../modal/modal';

class TreasureItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchTreasures();
  // }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTreasure(this.props.treasure._id);
    this.props.fetchTreasures();
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
            <button onClick={this.handleDelete}>Delete This</button>
        </div>
      </div>
    );
  }
}

export default TreasureItem;
