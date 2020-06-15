import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { getCurrentUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import TreasureIsland from './treasure_island';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  keyCount: state.session.user.keyCount,
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  getCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureIsland);
