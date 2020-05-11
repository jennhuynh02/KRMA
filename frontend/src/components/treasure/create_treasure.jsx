import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import CreateTreasure from './signup_form';

const mapStateToProps = (state, ownProps) => {
    return {
        treasure: state.treasures[ownProps.match.params.treasureId],
        errors: state.errors.treasure,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTreasure: treasure => dispatch(createTreasure(treasure))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTreasure);