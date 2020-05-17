import React from 'react';
import Modal from '../modal/modal';

class TreasureItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportMessage: ''
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleDelete(e) {
    const { deleteTreasure, fetchTreasures, treasure } = this.props;
    e.preventDefault();
    deleteTreasure(treasure._id);
    fetchTreasures();
    window.location.reload();
  }

  handleReport() {
    const { updateFullTreasure } = this.props;
    const newTreasure = {
      _id: this.props.treasure._id,
      creatorId: this.props.treasure.creatorId,
      date: this.props.treasure.date,
      ownerId: null,
      reportMessage: this.state.reportMessage,
      reported: true,
      type: this.props.treasure.type,
      url: this.props.treasure.url,
    };

    updateFullTreasure(newTreasure);
  }

  update() {
    return (e) => this.setState({
      reportMessage: e.currentTarget.value,
      reported: true,
      creatorId: this.props.treasure.creatorId,
    })
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
        <input type="text" onChange={this.update()} value={this.state.reportMessage} />
        <button type="submit" onClick={this.handleReport}>Report Treasure</button>
      </div>
    );
  }
}

export default TreasureItem;
