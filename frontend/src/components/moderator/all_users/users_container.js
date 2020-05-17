import { connect } from 'react-redux';
import { fetchAllUsers, resetOwners } from '../../../actions/user_actions'; 
import UsersPage from './users';

const mapStateToProps = (state) => ({
  allUsers: Object.values(state.admin.users)
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchAllUsers()),
  resetOwners: () => dispatch(resetOwners()),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(UsersPage);