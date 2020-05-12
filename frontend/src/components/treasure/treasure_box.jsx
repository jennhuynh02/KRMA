import React from 'react';
import { withRouter } from 'react-router-dom';

class extends React.Component{
    constructor(props){
        super(props);
    }

    fetchRandomTreasure(e){
        e.preventDefault;
        if(this.props.name === "Treasure"){
            // access combine length of all arrays length
            // Math.random to get random number from 0 to the total array lengths - 1
            // Use if/else if conditions to access the correct array
            // Subtract lengths of the previous arrays from the random number
            // Use updated number to access correct treasure
            // Change ownerId of treasure to the currentUser id
        } else if(this.props.name === "Photo"){
            // access length of photo array
            // Math.random to get number from 0 to array length -1
            // Use id to access correct treasure
            // Change ownerId to the currentUser id

        } else if(this.props.name === "Quote"){
            // access length of quote array
            // Math.random to get number from 0 to array length -1
            // Use id to access correct treasure
            // Change ownerId to the currentUser id
        }
        // else if for other types of boxes
    }

    render(){
        const {name} = this.props.name;
        return (
            <div className="TreasureBox" onSubmit={e => this.fetchRandomTreasure(e)}>
                <form className={`TreasureBoxForm TreasureBoxForm${name}`}>
                    <div className={`${name}BoxImage`}></div>
                    <button></button>
                </form>
            </div>
        );
    }
}