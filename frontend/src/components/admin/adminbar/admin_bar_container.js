import { connect } from 'react-redux';
import AdminBar from './admin_bar';
import { logout } from '../../../actions/session_actions';

const mapState = (state) => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(AdminBar);
