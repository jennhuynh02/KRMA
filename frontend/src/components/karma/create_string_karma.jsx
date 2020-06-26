import React from 'react';

class CreateStringKarma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    this.setState({
      string: e.currentTarget.value,
    });
  }

  handleUpload(e) {
    e.preventDefault();
    const { string } = this.state;
    const { currentUser, createTreasure, closeModal } = this.props;
    if (string.length > 10) {
      const treasure = {
        ownerId: currentUser._id,
        quote: string,
        type: 'quote', // need to fix
      };
      createTreasure(treasure);
      currentUser.keyCount += 1;
      closeModal();
    } else {
      this.setState({
        error: '10 character minimum',
      });
    }
  }

  render() {
    const { type, closeModal } = this.props;
    const { string, error } = this.state;
    return (
      <div className="add-karma-main">
        <div className="add-karma-left">
          <img src="rocks.jpg" alt="rocks" />
        </div>
        <div className="add-karma-right">
          <div onClick={() => closeModal()}>
            <i className="fa fa-close"></i>
          </div>
          <div className="add-karma-title">
            <h3>{type}</h3>
          </div>
          <div className="add-karma-input">
            <div className="add-karma-desc">
              <textarea
                value={string}
                onChange={this.handleChange}
                placeholder="Use this space to share some positive Karma"
              />
            </div>
            <div className="add-karma-button-container">
              <div onClick={this.handleUpload}>
                Add Karma
              </div>
            </div>
            <span className="add-karma-errors">{error}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStringKarma;
