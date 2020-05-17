import { connect } from 'react-redux';
import { deleteUser } from '../../../actions/user_actions';
import User from './u';

const mapStateToProps = (state, { user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  deleteSelectedUser: (user) => dispatch(deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
