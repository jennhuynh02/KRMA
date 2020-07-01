import React from 'react';

class CreateStringKarma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      error: '',
      uploaded: false,
      keyCount: this.props.currentUser.keyCount,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.addAnother = this.addAnother.bind(this);
    this.goToCollection = this.goToCollection.bind(this);
  }

  handleChange(e) {
    this.setState({
      string: e.currentTarget.value,
    });
  }

  handleUpload(e) {
    e.preventDefault();
    const { string } = this.state;
    const { currentUser, createTreasure, closeModal, getCurrentUser } = this.props;
    if (string.length > 10) {
      const treasure = {
        ownerId: currentUser._id,
        quote: string,
        type: 'quote', // need to fix
      };
      createTreasure(treasure);
      getCurrentUser(currentUser._id);
      this.setState({
        uploaded: true,
        keyCount: this.state.keyCount += 1,
      });
    } else {
      this.setState({
        error: '10 character minimum',
      });
    }
  }

  addAnother() {
    this.setState({
      uploaded: false,
      string: '',
    });
  }

  goToCollection() {
    const { closeModal } = this.props;
    window.location.href = '/#/collection';
    closeModal();
  }

  render() {
    const { type, closeModal, currentUser } = this.props;
    const { string, error } = this.state;

    const submission = () => (
      <div className="add-karma-right">
        <div onClick={() => closeModal()}>
          <i className="fa fa-close" />
        </div>
        <div className="thank-you-confirm">
          <h3>Thank you for your submission!</h3>
          You have
          {' '}
          {this.state.keyCount}
          {' '}
          karma points :)
        </div>
        <div className="add-karma-button-container">
          <div onClick={this.addAnother}>
            Add Another Karma
          </div>
        </div>
        <div className="add-karma-button-container">
          <div onClick={this.goToCollection}>
            Go to your Collection
          </div>
        </div>
      </div>
    );

    return (
      <div className="add-karma-main">
        <div className="add-karma-left">
          <img src="rocks.jpg" alt="rocks" />
        </div>
        { this.state.uploaded ? submission()
          : (
            <div className="add-karma-right">
              <div onClick={() => closeModal()}>
                <i className="fa fa-close" />
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
          )}
      </div>
    );
  }
}

export default CreateStringKarma;
