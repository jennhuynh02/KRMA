import React from 'react';

class TreasureContentsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            treasures: [],
        }
    }

    componentDidMount() {
        const { getAllTreasures } = this.props;
        getAllTreasures();
    }

    render() {
        return (
            <div>
              This is the Treasure Contents Page for admin.
            </div>
        );
    }
}

export default TreasureContentsPage;