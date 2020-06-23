import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateStringTreasure from './create_string_treasure';

const mapStateToProps = (state, { type }) => {
  debugger
  return ({
    currentUser: state.session.user,
    errors: state.errors.treasure,
    type,
  })
}

const mapDispatchToProps = (dispatch) => ({
  createTreasure: (treasure) => dispatch(createTreasure(treasure)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStringTreasure);
