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
      treasure, deleteTreasure, openModal, admin,
    } = this.props;

    // let content;
    // if (treasure.type === 'media') {
    //   content = <img className="content-image" src={treasure.url} onClick={(e) => openModal({ image: treasure })} />;
    // } else {
    //   content = <h1 className="content-text">{ treasure.url }</h1>;
    // }

    return (
      <div>
        <div className="content-main">
          <div className="item-dropdown">
            <i className="fa fa-bars" aria-hidden="true"></i>
            {(admin
              ? (
                <ul className="item-dropdown-content">
                  <li onClick={this.handleDelete}>Discard</li>
                </ul>
              )
              : (
                <ul className="item-dropdown-content">
                  <li onClick={this.handleDelete}>Discard</li>
                  <li onClick={(e) => openModal({ report: treasure })}>Report</li>
                </ul>
              )
            )}
            {/* <ul className="item-dropdown-content">
              <li onClick={this.handleDelete}>Discard</li>
              <li onClick={(e) => openModal({ report: treasure })}>Report</li>
            </ul> */}
          </div>
          <div className="content-container">
            {(treasure.type === 'media')
              ? <img className="content-image" src={treasure.url} onClick={(e) => openModal({ image: treasure })} alt="content"/>
              : <h1 className="content-text">{ treasure.url }</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
