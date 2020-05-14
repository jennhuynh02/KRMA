import { connect } from 'react-redux';
import Collection from './collection'
import {
  fetchTreasures,
  fetchUserTreasures
} from "../../actions/treasure_actions";

const mapStateToProps = state => ({
  firstName: state.session.user.firstName,
  allTreasures: Object.values(state.treasure.admin),
  admin: (state.session.user.email === "admin@treasurebox.com"),
  // currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  getAllTreasures: () => dispatch(fetchTreasures()),
  // getUserTreasures: (currentUser) => dispatch(fetchUserTreasures(currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);