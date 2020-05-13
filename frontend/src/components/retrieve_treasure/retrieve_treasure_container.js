import { connect } from 'react-redux';
import React from 'react';
import { fetchTreasure } from '../../actions/treasure_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import RetrieveTreasure from './retrieve_treasure';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTreasure: id => dispatch(fetchTreasure(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RetrieveTreasure);