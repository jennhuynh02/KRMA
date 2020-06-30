import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateFullTreasure } from '../../actions/treasure_actions';
import ReportTreasure from './report_treasure';

const mapStateToProps = (state, { treasure }) => ({
  treasure,
});

const mapDispatchToProps = (dispatch) => ({
  updateFullTreasure: (treasure) => dispatch(updateFullTreasure(treasure)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportTreasure);
