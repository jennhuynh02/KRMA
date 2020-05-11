import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateTreasure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            createId: this.props.currentUser,
            treasureType: "",
            treasureUrl: ""            
        }
    }

    update(field, e){
        this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        formData = new FormData();
        formData.append('treasure[createId]', this.state.createId);
        formData.append('treasure[ownerId]', "");
        formData.append('treasure[teasureType]', this.state.treasureType);
        formData.append('treasure[treasureUrl]', this.state.treasureUrl);
        this.setState({ treasureType: "" });
        this.setState({ treasureUrl: "" });
        createTreasure(this.state);
    }

    render(){
        return (
            <div className="CreateTreasure">
                <form className="CreateTreasureForm" onSubmit={e => handleSubmit(e)}>
                    <label className="TreasureTypeLabel"></label>
                    <input type="file" onChange={e => this.update("treasureType", e)}/>
                    <label className="TreasureUrlLabel"></label>
                    <input type="file" onChange={e => this.update("treasureUrl", e)}/>
                </form>
            </div>
        )
    }
}

export default withRouter(CreateTreasure);