import { connect } from 'react-redux';
import {
  fetchTreasure, fetchUserTreasures, updateTreasure, updateFullTreasure,
} from '../../actions/treasure_actions';
import { closeModal } from '../../actions/modal_actions';
import { getCurrentUser } from '../../actions/session_actions';
import RetrieveTreasure from './retrieve_treasure';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  currentTreasure: state.treasure.new,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTreasure: (userId) => dispatch(fetchTreasure(userId)),
  fetchUserTreasures: (userId) => dispatch(fetchUserTreasures(userId)),
  updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
  updateFullTreasure: (treasure) => dispatch(updateFullTreasure(treasure)),
  fetchCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RetrieveTreasure);
