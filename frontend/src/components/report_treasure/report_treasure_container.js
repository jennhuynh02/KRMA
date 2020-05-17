import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateTreasure, updateFullTreasure } from '../../actions/treasure_actions';
import ReportTreasure from './report_treasure';

const mapStateToProps = (state, {treasure}) => {
    return {
        treasure: state.treasure
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processReport: (treasure) => dispatch(updateTreasure(treasure)),
        updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
        updateFullTreasure: (treasure) => dispatch(updateFullTreasure(treasure))
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportTreasure);