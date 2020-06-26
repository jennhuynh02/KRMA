import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import { closeModal } from '../../actions/modal_actions';
import CreateStringKarma from './create_string_karma';

const mapStateToProps = (state, { type }) => ({
  currentUser: state.session.user,
  errors: state.errors.treasure,
  type,
});

const mapDispatchToProps = (dispatch) => ({
  createTreasure: (treasure) => dispatch(createTreasure(treasure)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStringKarma);
