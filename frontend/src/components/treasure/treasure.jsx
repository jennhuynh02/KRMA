import React from 'react';
import { withRouter } from 'react-router-dom';

class Treasure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            treasure: ""
        }
        this.fetchTreasure = this.props.fetchTreasure.bind(this);
    }
    

    componentDidMount(){
        const {treasureId, fetchTreasure} = this.props;
        this.setState({treasure: fetchTreasure(treasureId)});
    }

    render(){
        const {treasure} = this.state;
        return(
            <div className="treasureDiv">
                <h1 className="titleTreasure">{`Treasure Item: ${treasure.id}`}</h1>
                <div className="treasureUrl">
                    {treasure ? treasure.treasureUrl : ""}
                </div>
            </div>
        )
    }
}

export default Treasure;
