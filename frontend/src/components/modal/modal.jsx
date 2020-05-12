import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import CreateTreasureContainer from '../treasure/create_treasure_container';
import ReportTreasureContainer from '../treasure/report_treasure_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;

    let component;
    switch(modal) {
        case 'upload':
            component = <CreateTreasureContainer />;
            break;
        case 'report':
            component = <ReportTreasureContainer />; // to report the treasure you receive from the box
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);