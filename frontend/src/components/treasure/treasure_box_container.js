import { connect } from 'react-redux';
import { deleteTreasure } from '../../actions/treasure_actions';
import TreasureBox from './treasure_box';

const mapStateToProps = (state) => {
    debugger
    return {
    currentUser: state.session.user,
    treasures: state.treasures,
    collections: state.collections,
    // errors: state.errors.treasure,
}};

const mapDispatchToProps = dispatch => ({
    deleteTreasure: treasure => dispatch(deleteTreasure(treasure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureBox);