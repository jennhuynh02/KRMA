import React from 'react';

class RetrieveTreasure extends React.Component {
    constructor(props) {
        super(props);

        this.state = { keyCount: this.props.keyCount };
        // NEED TO GET KEYCOUNT SLICE OF STATE HERE
    }
    
    componentDidMount() {
      debugger
      const { fetchTreasure, currentUser } = this.props;
      fetchTreasure(currentUser.id)
    }

    render() {
      const { treasure } = this.state;
      debugger
      return (
        <div className="retrieve-treasure-wrapper">
          <button className="close-modal" onClick={this.props.closeModal}>
              X
              {/* maybe get an icon here */}
          </button>
          { treasure ? treasure.treasureUrl : null }
          <button>Save to Collection</button>
          {/* onClick, will call action that will add received treasureId to user's collection array */}
          <button>Report Treasure</button>
          {/* onClick, will add treasureId to report queue or something idk how this will work */}
          <br />
          <button onClick={() => this.props.openModal("upload")}>
            Upload Treasure Instead
          </button>
        </div>
      );
    }
}

export default RetrieveTreasure;