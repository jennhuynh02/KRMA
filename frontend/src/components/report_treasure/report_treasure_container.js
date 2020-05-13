import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ReportTreasure from './report_treasure';

// hopefully this works for updating a treasure document, if not will have to
// query DB within report_treasure.jsx to update it

const mapStateToProps = state => {
    // debugger; test this with debugger once report buttons have been linked up to openModal('report')
    return {
        // treasure: this.state.treasure
    };
};

const mapDispatchToProps = dispatch => {
    // assuming updateTreasure action exists, which it doesn't yet
    return {
        processReport: treasure => dispatch(updateTreasure(treasure)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportTreasure);

// later moderators will query the database for all of the treasures with 
// reported: true