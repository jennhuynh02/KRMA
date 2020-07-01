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
    const { updateTreasure, treasure } = this.props;
    const { reportMessage } = this.state;

    const newTreasure = { ...treasure };
    newTreasure.reportMessage = reportMessage;
    newTreasure.ownerId = null;
    newTreasure.reported = true;
    updateTreasure(newTreasure);
    window.location.reload();
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
      treasure, openModal, admin,
    } = this.props;

    return (
      <div>
        <div className="content-main">
          <div className="item-dropdown">
            <i className="fa fa-bars" aria-hidden="true" />
            {(admin
              ? (
                <ul className="item-dropdown-content">
                  <li onClick={this.handleDelete}>Delete</li>
                </ul>
              )
              : (
                <ul className="item-dropdown-content">
                  <li onClick={this.handleDelete}>Discard</li>
                  <li onClick={(e) => openModal({ report: treasure })}>Report</li>
                </ul>
              )
            )}
          </div>
          <div className="content-container">
            {(treasure.type === 'media') ?
              <div>
                <h1 className="karma-image-instruction">Click on image to view full size.</h1>
                <img className="content-image" src={treasure.url} onClick={(e) => openModal({ image: treasure })} alt="content" />
              </div>
              : <h1 className="content-text">{ treasure.url }</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
