import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { getCurrentUser } from '../../actions/session_actions';
import CreateImageKarma from './create_image_karma';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  errors: state.errors.treasure,
});

const mapDispatchToProps = (dispatch) => ({
  createTreasure: (treasure) => dispatch(createTreasure(treasure)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
  getCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(CreateImageKarma);
