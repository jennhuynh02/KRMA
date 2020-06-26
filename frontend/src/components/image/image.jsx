import React from 'react';

class Image extends React.PureComponent {
  render() {
    const { imgUrl } = this.props;
    return (
      <img className="image-popout-container" src={imgUrl} alt="img" />
    );
  }
}

export default Image;
