// TBD

// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class TreasureBox extends React.Component {
//   fetchRandomTreasure(e) {
//     e.preventDefault();
//     const { currentUser, treasures, deleteTreasure } = this.props;
//     let { collections } = this.props;

//     if (currentUser.keyCount > 0) {
//       const rand = Math.random(Object.values(treasures).length);
//       const myTreasure = Object.values(treasures)[rand];
//       collections = collections[currentUser.collectionId].push(myTreasure)[rand];
//       deleteTreasure(myTreasure);
//       return myTreasure;
//     }
//   }

//   render() {
//     return (
//       <div className="TreasureBox">
//         <form className="TreasureBoxForm" onSubmit={(e) => this.fetchRandomTreasure(e)}>
//           <div className="TreasureBoxImage" />
//           <button type="button" className="boxButton">Open The Box!</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(TreasureBox);
