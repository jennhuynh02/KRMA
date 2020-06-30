import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateTreasure, fetchUserTreasures } from '../../actions/treasure_actions';
import ReportTreasure from './report_treasure';

const mapStateToProps = (state, { treasure }) => ({
  currentUser: state.session.user,
  treasure,
});

const mapDispatchToProps = (dispatch) => ({
  updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
  fetchUserTreasures: (userId) => dispatch(fetchUserTreasures(userId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportTreasure);
