import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import CreateTreasureContainer from '../treasure/create_treasure_container';
import CreateQuoteContainer from '../create_quote/create_quote_container';
import RetrieveTreasureContainer from '../retrieve_treasure/retrieve_treasure_container';
import './modal.css';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;

    let component;
    switch(modal) {
        case 'photo':
            component = <CreateTreasureContainer />;
            break;
        case 'quote': 
            component = <CreateQuoteContainer />;
            break;
        case 'retrieve':
            component = <RetrieveTreasureContainer />;
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