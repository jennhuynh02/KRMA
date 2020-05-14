import React from 'react';

class AWSCreateTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      error: "",
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(e) {
    this.setState({
      selectedFile: e.currentTarget.files[0]
    });
  };

  handleUpload(e) {
    e.preventDefault();
    let data = new FormData();
    if (this.state.selectedFile) {
      data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
      data.append('ownerId', this.props.currentUser.id)
      this.props.createTreasure(data);
      this.setState({
        selectedFile: "",
      })
    } else {
      this.setState({
        error: 'Please upload file'
      })
    }
  };

  render() {
    return (
        <div className="create-treasure-wrapper">
          <button className="close-modal" onClick={this.props.closeModal}>
            X
          </button>

          <button onClick={() => this.props.openModal('quote')}>Quote</button>
          <div className="card-header">
            <h3 style={{ color: "#555", marginLeft: "12px" }}>
              Add a Photo to the Treasure Box
            </h3>
            <p> Max 4MB </p>
          </div>
          <div className="card-body">
            <input type="file" onChange={this.handleFile} />
            <div className="mt-5">
              {this.state.error}
              <button className="btn btn-info" onClick={this.handleUpload}>
                Upload!
              </button>
              <br />
              <button onClick={() => this.props.openModal('retrieve')}>Retrieve Treasure Instead</button>
            </div>
          </div>
        </div>
    );
  }
}

export default AWSCreateTreasure;
