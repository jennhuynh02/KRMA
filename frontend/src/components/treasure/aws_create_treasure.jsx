import React from 'react';

class AWSCreateTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: null,
      selectedFile: null,
      error: '',
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        selectedFile: file,
        photoUrl: fileReader.result,
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUpload(e) {
    e.preventDefault();
    const data = new FormData();
    const { selectedFile } = this.state;
    const { currentUser, createTreasure, closeModal } = this.props;
    if (selectedFile) {
      data.append('image', selectedFile, selectedFile.name);
      data.append('ownerId', currentUser._id);
      createTreasure(data);
      this.setState({
        selectedFile: '',
      });
      currentUser.keyCount += 1;
      window.location.href = '/#/treasureisland';
      closeModal();
    } else {
      this.setState({
        error: 'Please upload file',
      });
    }
  }

  render() {
    const { closeModal, openModal } = this.props;
    const { photoUrl, error } = this.state;
    const preview = photoUrl ? <img className="content-img" src={photoUrl} alt="photourl" /> : null;
    return (
      <div className="bucket-box">
        <div>
          <h3>
            Add a Photo to the Treasure Box
          </h3>
          <p> Max 4MB </p>
        </div>
        <div>
          <input type="file" className="upload-photo-input" onChange={this.handleFile} />
          <div className="mt-5">
            {error}
            {preview}
            <button type="button" className="upload-quote-button" onClick={this.handleUpload}>
              Upload this treasure for a key!
            </button>
            <button type="button" className="upload-quote-button" onClick={() => openModal({ retrieve: -1 })}>
              Retrieve Treasure Instead
            </button>
            <button type="button" className="upload-quote-button" onClick={(e) => closeModal(e)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AWSCreateTreasure;
