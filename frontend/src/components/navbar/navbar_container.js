import { connect } from 'react-redux';
import { logout, getCurrentUser } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mapState = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  getCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
});

export default connect(mapState, mapDispatch)(NavBar);
