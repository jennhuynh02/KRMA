import React from 'react';
import axios from 'axios';

class AWSCreateTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile = (e) => {
    this.setState({
      selectedFile: e.currentTarget.files[0]
    });
  };

  handleUpload = (e) => {
    e.preventDefault();
    let data = new FormData();
    if (this.state.selectedFile) {
      data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
      // FULL AXIOS REQUEST, MAYBE PUT INTO ACTION
      axios.post('/api/treasure/treasure-upload', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
      .then((response) => {
        if (response.status === 200) {
          // If file size is larger than expected.
          if (response.data.error) {
            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
              console.log('Max size: 4MB')
            } else {
            console.log(response.data);
            console.log(response.data.error)
            }
          } else { // Success
            let fileName = response.data;
            console.log('fileName', fileName);
            console.log('File Uploaded');;
          }
        }
      }).catch((error) => {
        console.log(error); // if unexpected error
      });
    } else { // if file not selected throw error
      console.log('Please upload file')
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
          <div className="card-header">
            <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3>
            <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px (Max 4MB)</p>
          </div>
          <div className="card-body">
            <p className="card-text">Please upload an image for your profile</p>
            <input type="file" onChange={this.handleFile}/>
            <div className="mt-5">
              <button className="btn btn-info" onClick={this.handleUpload}>Upload!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AWSCreateTreasure;
