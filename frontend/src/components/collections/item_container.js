import { connect } from 'react-redux';
import Item from './item';
import { deleteTreasure, fetchTreasures, updateTreasure } from '../../actions/treasure_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { treasure, admin }) => ({
  treasure,
  admin,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId)),
  fetchTreasures: () => dispatch(fetchTreasures()),
  openModal: (modal) => dispatch(openModal(modal)),
  updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
