import { connect } from 'react-redux';
import AdminBar from "./admin_bar";

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    user: state.session.user,
});

export default connect(mapStateToProps)(AdminBar);
