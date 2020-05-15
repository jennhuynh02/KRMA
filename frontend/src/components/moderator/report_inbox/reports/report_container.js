import { connect } from 'react-redux';
import Report from './report';
import { deleteUser } from '../../../../actions/user_actions';
import { updateTreasure } from '../../../../actions/treasure_actions';

const mapStateToProps = (state) => ({
  treasure: state.treasure.new,
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => {
  return ({
    reportTreasure: (treasure) => dispatch(updateTreasure(treasure)),
    deleteSelectedUser: (user) => dispatch(deleteUser(user)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);