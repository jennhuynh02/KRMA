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
      window.location.href = "/#/treasureisland";
      this.props.closeModal();
    } else {
      this.setState({
        error: 'Please upload file'
      })
    }
  };

  render() {
    const { closeModal } = this.props;
    const preview = this.state.photoUrl ? <img className="content-img" src={this.state.photoUrl} /> : null
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
              {this.state.error}
              { preview }
              <button className="upload-quote-button" onClick={this.handleUpload}>
                Upload this treasure for a key!
              </button>
              <br />
              <button className="upload-quote-button" onClick={() => this.props.openModal({ retrieve: -1 })}>
                Retrieve Treasure Instead
              </button>
              <br />
              <button className="upload-quote-button" onClick={(e) => closeModal(e)}>Cancel</button>
              <br />
            </div>
          </div>
        </div>
    );
  }
}

export default AWSCreateTreasure;
