import React from 'react';

class TreasureItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
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

export default TreasureItem;