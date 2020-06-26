import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Main from './main';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
