import { connect } from 'react-redux';
import Collection from './collection.jsx';
import {
  fetchTreasures,
  fetchUserTreasures,
} from "../../actions/treasure_actions";

const mapStateToProps = (state) => ({
  firstName: state.session.user.firstName,
  allTreasures: Object.values(state.treasure.admin),
  userTreasures: Object.values(state.treasure.user),
  admin: (state.session.user.email === "admin@treasurebox.com"),
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTreasures: () => dispatch(fetchTreasures()),
  getUserTreasures: (userId) => dispatch(fetchUserTreasures(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
