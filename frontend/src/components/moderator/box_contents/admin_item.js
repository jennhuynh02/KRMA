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
    let content
    if (treasure.type === "media") {
      content = <img className="content-img" src={ treasure.url }/>
    } else {
      content = <h1>{ treasure.url }</h1>
    }
    return (
    <div className="content-item">
      {content}
      <button className="admin-delete-content" onClick={this.handleDelete}>Delete This</button>
    </div>
    );
  }
}

export default AdminItem;