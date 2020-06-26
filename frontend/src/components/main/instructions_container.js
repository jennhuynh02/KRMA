import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Instructions from './instructions';

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(Instructions);
