import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import TreasureIsland from './treasure_island';

const mapStateToProps = state => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureIsland);