import { connect } from 'react-redux';
import { fetchAllUsers } from '../../../actions/user_actions'; 
import UsersPage from './users';

const mapStateToProps = (state) => {
  return ({
    allUsers: Object.values(state.admin.users)
  })
};

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(UsersPage);