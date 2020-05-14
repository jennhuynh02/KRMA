import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ReportTreasure from './report_treasure';

// hopefully this works for updating a treasure document, if not will have to
// query DB within report_treasure.jsx to update it

const mapStateToProps = state => {
    return {
        treasure: state.treasure
    };
};

const mapDispatchToProps = dispatch => {
    // assuming updateTreasure action exists, which it doesn't yet
    return {
        processReport: treasure => dispatch(updateTreasure(treasure)),
        editTreasure: (treasure) => dispatch(editTreasure(treasure)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportTreasure);

// later moderators will query the database for all of the treasures with 
// reported: true