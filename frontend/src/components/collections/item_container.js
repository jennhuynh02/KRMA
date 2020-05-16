import { connect } from 'react-redux';
import TreasureItem from './item';
import { deleteTreasure, fetchTreasures } from '../../actions/treasure_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { treasure }) => ({
  treasure,
  imgUrl: treasure.url,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId)),
  fetchTreasures: () => dispatch(fetchTreasures()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureItem);