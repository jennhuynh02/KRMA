import { connect } from 'react-redux';
import Item from './item';
import { deleteTreasure, fetchTreasures, updateFullTreasure } from '../../actions/treasure_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { treasure, admin }) => ({
  treasure,
  admin,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId)),
  fetchTreasures: () => dispatch(fetchTreasures()),
  openModal: (modal) => dispatch(openModal(modal)),
  updateFullTreasure: (treasure) => dispatch(updateFullTreasure(treasure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
