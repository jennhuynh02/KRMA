import React from 'react';

class AdminItem extends React.Component {
  render() {
    const { imgUrl } = this.props
    return (
    <div>
      <img className="content-item" src={ imgUrl } />
    </div>
    );
  }
}

export default AdminItem;