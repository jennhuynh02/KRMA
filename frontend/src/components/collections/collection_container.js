import { connect } from 'react-redux';
import Collection from './collection'
import { fetchTreasures } from "../../actions/treasure_actions";

const mapStateToProps = state => ({
  firstName: state.session.user.firstName,
  allTreasures: Object.values(state.treasure.admin)
});

const mapDispatchToProps = dispatch => ({
  getAllTreasures: () => dispatch(fetchTreasures()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);