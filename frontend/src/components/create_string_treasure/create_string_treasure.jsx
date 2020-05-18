import React from 'react';

class CreateStringTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      error: '',
    };

    this.handleQuote = this.handleQuote.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleQuote(e) {
    this.setState({
      quote: e.currentTarget.value,
    });
  }

  handleUpload(e) {
    e.preventDefault();
    const { quote } = this.state;
    const { currentUser, createTreasure, closeModal } = this.props;
    if (quote !== '') {
      const treasure = {
        ownerId: currentUser.id,
        quote,
        type: 'quote',
      };
      createTreasure(treasure);
      this.setState({ quote: '' });
      currentUser.keyCount += 1;
      closeModal();
      console.log('Upload Successful!');
    } else {
      this.setState({
        error: 'Is this even a treasure? Please enter something...',
      });
    }
  }

  render() {
    const { type, openModal, closeModal } = this.props;
    const { quote, error } = this.state;
    return (
      <div className="bucket-box">
        <div>
          <h3>
            {type}
          </h3>
        </div>
        <div>
          <textarea
            className="quote-input"
            value={quote}
            onChange={this.handleQuote}
          />
          <div className="mt-5">
            {error}
            <br />
            <button className="upload-quote-button" onClick={this.handleUpload}>
              Exchange this treasure for key!
            </button>
            <br />
            <button className="upload-quote-button" onClick={() => openModal({ retrieve: -1 })} type="button">
              Retrieve Treasure Instead
            </button>
            <button className="upload-quote-button" onClick={(e) => closeModal(e)} type="button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStringTreasure;
