import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportMessage: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { deleteTreasure, fetchTreasures, treasure } = this.props;
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
    window.location.reload();
    updateFullTreasure(newTreasure);
  }

  update() {
    const { treasure } = this.props;
    return (e) => this.setState({
      reportMessage: e.currentTarget.value,
      reported: true,
      creatorId: treasure.creatorId,
    });
  }

  render() {
    const {
      treasure, deleteTreasure, openModal, closeModal,
    } = this.props;
    let id;
    id = treasure._id;
    let content;
    let treasureType;
    treasureType = treasure.type;
    if (treasureType === 'media') {
      content = <img className="content-img" src={treasure.url} onClick={(e) => openModal({ image: treasure })} />;
    } else {
      content = <h1 className="treasure-text">{ treasure.url }</h1>;
    }

    return (
      <div>
        <div className="content-item">
          { content }

          <div className="dropdown">
            <p className="drop-button-dots">* * *</p>
            <ul className="dropdown-content">
              <li className="dropdown-options" onClick={this.handleDelete}>Discard Treasure</li>
              <li className="dropdown-options" onClick={(e) => openModal({ report: this.props.treasure })}>Report Treasure</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Item;
