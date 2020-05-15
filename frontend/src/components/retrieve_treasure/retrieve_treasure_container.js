import { connect } from 'react-redux';
import { fetchTreasure, updateTreasure } from '../../actions/treasure_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import RetrieveTreasure from './retrieve_treasure';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        currentTreasure: state.treasure.new,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTreasure: (userId) => dispatch(fetchTreasure(userId)),
        updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RetrieveTreasure);