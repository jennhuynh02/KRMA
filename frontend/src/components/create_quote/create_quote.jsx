import React from "react";

class CreateQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      error: "",
    };

    this.handleQuote = this.handleQuote.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(e) {
    this.setState({
      selectedFile: e.currentTarget.files[0],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = new FormData();
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      data.append("ownerId", this.props.currentUser.id);
      this.props.createTreasure(data);
      this.setState({
        selectedFile: "",
      });
    } else {
      this.setState({
        error: "Please enter a quote",
      });
    }
  }

  render() {
    return (
      <div className="create-quote-wrapper">
        <button className="close-modal" onClick={this.props.closeModal}>
          X
        </button>
        <div className="quote-header">
          <h3 style={{ color: "#555", marginLeft: "12px" }}></h3>
            Add a Photo to the Treasure Box
        </div>
        <div className="quote-body">
          <input type="textarea" onChange={this.handleQuote} />
          <div className="mt-5">
            {this.state.error}
            <button className="submit" onClick={this.handleSubmit}>
              Submit
            </button>
            <br />
            <button onClick={() => this.props.openModal("retrieve")}>
              Retrieve Treasure Instead
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuote;
