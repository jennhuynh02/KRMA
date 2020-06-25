import React from 'react';

class Image extends React.PureComponent {
  render() {
    const { imgUrl } = this.props;
    return (
      <div>
        <img src={imgUrl} alt="img" />
      </div>
    );
  }
}

export default Image;
