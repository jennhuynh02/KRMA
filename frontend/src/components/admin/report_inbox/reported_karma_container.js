import { connect } from 'react-redux';
import ReportedKarma from './reported_karma';
import { deleteUser } from '../../../actions/user_actions';
import { openModal } from '../../../actions/modal_actions';
import { updateTreasure, deleteTreasure } from '../../../actions/treasure_actions';

const mapStateToProps = (state, { treasure }) => ({
  user: state.session.user,
  treasure,
});

const mapDispatchToProps = (dispatch) => ({
  // reportTreasure: (treasure) => dispatch(updateTreasure(treasure)),
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId)),
  deleteUser: (userId) => dispatch(deleteUser(userId)),
  updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
  openModal: (modal) => dispatch(openModal(modal)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ReportedKarma);
