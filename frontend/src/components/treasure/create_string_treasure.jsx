import React from 'react';

class CreateStringTreasure extends React.Component {
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
      // this.setState({ string: '' });
      currentUser.keyCount += 1;
      closeModal();
    } else {
      this.setState({
        error: '10 character minimum. Please try again.',
      });
    }
  }

  render() {
    const { type, closeModal } = this.props;
    const { string, error } = this.state;
    return (
      <div className="add-karma-main">
        <div className="add-karma-title">
          <h3>{type}</h3>
        </div>
        <div className="add-karma-input">
          <textarea
            value={string}
            onChange={this.handleChange}
            placeholder="Use this space to share some positive Karma"
          />
          <div className="add-karma-button-container">
            <button type="button" onClick={this.handleUpload}>
              Add Karma
            </button>
            <button type="button" onClick={(e) => closeModal(e)}>
              Cancel
            </button>
          </div>
          <span className="add-karma-errors">{error}</span>
        </div>
      </div>
    );
  }
}

export default CreateStringTreasure;
