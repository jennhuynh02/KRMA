import React from 'react';
import { withRouter } from 'react-router-dom';

class TreasureBox extends React.Component{
    constructor(props){
        super(props);
    }

    fetchRandomTreasure(e){
        e.preventDefault();
        const {currentUser, treasures, collections, deleteTreasure} = this.props;
        if(currentUser.keyCount > 0){
            const rand = Math.random(Object.values(treasures).length);
            let myTreasure = Object.values(treasures)[rand];
            collections = collections[currentUser.collectionId].push(myTreasure)[rand];
            deleteTreasure(myTreasure)
            return myTreasure;
        } else {
            // errors
        }
        
    }

    render(){
        return (
            <div className="TreasureBox" onSubmit={e => this.fetchRandomTreasure(e)}>
                <form className="TreasureBoxForm">
                    <div className="TreasureBoxImage">
                        "image here"
                    </div>
                    <button className="boxButton">Open The Box!</button>
                </form>
            </div>
        );
    }
}

export default withRouter(TreasureBox);