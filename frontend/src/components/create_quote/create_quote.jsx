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
    let data = new FormData();
    if (this.state.quote !== "") {
      data.append("quoteText", this.state.quote);
			data.append("ownerId", this.props.currentUser.id);
			this.props.createTreasure(data); // failing POST request currently
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
