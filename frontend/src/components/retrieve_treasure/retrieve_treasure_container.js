import { connect } from 'react-redux';
import { fetchTreasure } from '../../actions/treasure_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import RetrieveTreasure from './retrieve_treasure';

const mapStateToProps = state => {
    debugger;
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTreasure: (id) => dispatch(fetchTreasure(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RetrieveTreasure);