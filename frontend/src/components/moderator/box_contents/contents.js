import React from 'react';
import AdminItemContainer from './admin_item_container';

class TreasureContentsPage extends React.Component {

    componentDidMount() {
        const { getAllTreasures } = this.props;
        getAllTreasures();
    }

    render() {
        const { allTreasures } = this.props
        return (
            <div className="contents-page">
              <h1 className="contents-header">All Treasures</h1>
              <div className="the-collection">
              {allTreasures.map((treasure) => (
                  <AdminItemContainer treasure={treasure} />
                  ))}
                </div>
            </div>
        );
    }
}

export default TreasureContentsPage;