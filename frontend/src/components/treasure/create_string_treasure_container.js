import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import { closeModal } from '../../actions/modal_actions';
import CreateStringTreasure from './create_string_treasure';

const mapStateToProps = (state, { type }) => ({
  currentUser: state.session.user,
  errors: state.errors.treasure,
  type,
});

const mapDispatchToProps = (dispatch) => ({
  createTreasure: (treasure) => dispatch(createTreasure(treasure)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStringTreasure);
