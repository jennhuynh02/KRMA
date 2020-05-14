import { connect } from 'react-redux';
import { deleteUser } from '../../../actions/user_actions';
import Report from './report';

const mapStateToProps = (state, {user}) => ({
  user,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteSelectedUser: (user) => dispatch(deleteUser(user)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);