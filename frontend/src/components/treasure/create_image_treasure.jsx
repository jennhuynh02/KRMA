import React from 'react';

class CreateImageTreasure extends React.Component {
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

    return (
      <div className="add-karma-main">
        <div className="add-karma-title">
          <h3>Add a Photo</h3>
        </div>
        <div className="add-karma-input">
          {(photoUrl ? <img className="content-img" src={photoUrl} alt="photourl" /> : null)}
          <input type="file" className="upload-photo-input" onChange={this.handleFile} />
          <div className="add-karma-input">
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
      </div>
    );
  }
}

export default CreateImageTreasure;
