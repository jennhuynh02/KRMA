import { connect } from 'react-redux';
import Report from './report';
import { deleteUser } from '../../../../actions/user_actions';
import { updateTreasure } from '../../../../actions/treasure_actions';

const mapStateToProps = (state, {treasure}) => ({
  user: state.session.user,
  treasure
});

const mapDispatchToProps = (dispatch) => {
  return ({
    reportTreasure: (treasure) => dispatch(updateTreasure(treasure)),
    deleteSelectedUser: (userId) => dispatch(deleteUser(userId)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);