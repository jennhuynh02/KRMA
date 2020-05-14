import React from 'react';

class TreasureItem extends React.Component {
  render() {
    const { imgUrl } = this.props
    return (
    <div>
      <img className="collection-item" src={ imgUrl } />
    </div>
    );
  }
}

export default TreasureItem;