import { connect } from 'react-redux';
import Image from './image';
import { closeModal } from '../../actions/modal_actions';
import { updateFullTreasure } from '../../actions/treasure_actions';

const mapStateToProps = (state, { treasure }) => ({
  treasure,
  imgUrl: treasure.url,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateFullTreasure: (treasure) => dispatch(updateFullTreasure(treasure))
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);