import { connect } from 'react-redux';
import Image from './image';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { treasure }) => ({
  treasure,
  imgUrl: treasure.url,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);