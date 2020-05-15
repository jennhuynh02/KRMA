import React from 'react';

class AWSCreateTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: null,
      selectedFile: null,
      error: '',
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0]
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
  };

  handleUpload(e) {
    e.preventDefault();
    let data = new FormData();
    if (this.state.selectedFile) {
      data.append('image', this.state.selectedFile, this.state.selectedFile.name);
      data.append('ownerId', this.props.currentUser.id)
      this.props.createTreasure(data);
      this.setState({
        selectedFile: "",
      });
      this.props.currentUser.keyCount += 1;
      this.props.closeModal()
    } else {
      this.setState({
        error: 'Please upload file'
      })
    }
  };

  render() {
    console.log(this.state)
    const { closeModal } = this.props;
    const preview = this.state.photoUrl ? <img className="content-img-rt" src={this.state.photoUrl} /> : null
    return (
        <div className="create-treasure-wrapper">
          <button className="close-modal" onClick={this.props.closeModal}>
            X
          </button>
          <div className="photo-upload-header">
            <h3>
              Add a Photo to the Treasure Box
            </h3>
            <p> Max 4MB </p>
          </div>
          <div className="card-body">
            <input type="file" className="upload-photo-input" onChange={this.handleFile} />
            <div className="mt-5">
              {this.state.error}
              { preview }
              <button className="upload-photo-button" onClick={this.handleUpload}>
                Upload!
              </button>
              <button className="upload-photo-button" onClick={(e) => closeModal(e)}>Cancel</button>
              <br />
            </div>
          </div>
        </div>
    );
  }
}

export default AWSCreateTreasure;
