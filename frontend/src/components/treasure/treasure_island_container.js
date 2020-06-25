import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/session_actions';
import TreasureIsland from './treasure_island';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureIsland);
