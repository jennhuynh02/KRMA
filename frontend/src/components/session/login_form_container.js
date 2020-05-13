import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
	return {
		currentUser: state.session.currentUser,
		errors: state.errors.session,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);