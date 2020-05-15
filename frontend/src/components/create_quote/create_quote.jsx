import React from "react";

class CreateQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      error: "",
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
    if (this.state.quote !== "") {
      let treasure = {
        ownerId: this.props.currentUser.id,
        quote: this.state.quote,
        type: "quote",
      }
			this.props.createTreasure(treasure);
			this.setState({ quote: "" });
			// maybe render a message to user saying "Upload successful!" as bonus feature
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
          <h3 style={{ color: "#555", marginLeft: "12px" }}>
            Add a Quote to the Treasure Box
          </h3>
        </div>
        <div className="quote-body">
          <input
            type="textarea"
            value={this.state.quote}
            onChange={this.handleQuote}
          />
          <div className="mt-5">
            {this.state.error}
            <br />
            <button className="submit" onClick={this.handleUpload}>
              Add Quote
            </button>
            <br />
            <button onClick={() => this.props.openModal({ retrieve: -1 })}>
              Retrieve Treasure Instead
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuote;
