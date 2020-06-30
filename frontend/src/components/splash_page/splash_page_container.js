import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SplashPage from './splash_page';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mapDispatchToProps)(SplashPage);
