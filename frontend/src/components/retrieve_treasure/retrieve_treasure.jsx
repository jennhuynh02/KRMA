import React from 'react';

class RetrieveTreasure extends React.Component {
    constructor(props) {
        super(props);

        this.state = { keyCount: this.props.keyCount };
        // NEED TO GET KEYCOUNT SLICE OF STATE HERE
    }
    
    render() {

        return (
          <div className="retrieve-treasure-wrapper">
            retrieve treasure component
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