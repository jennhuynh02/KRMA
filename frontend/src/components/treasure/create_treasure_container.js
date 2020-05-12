import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import CreateTreasure from './create_treasure';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    errors: state.errors.treasure
});

const mapDispatchToProps = dispatch => ({
    createTreasure: treasure => dispatch(createTreasure(treasure))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTreasure);