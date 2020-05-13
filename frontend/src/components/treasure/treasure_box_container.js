import { connect } from 'react-redux';
import { fetchTreasure } from '../../actions/treasure_actions';
import TreasureBox from './picture_island';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    treasures: state.treasures,
    errors: state.errors.treasure
});

const mapDispatchToProps = dispatch => ({
    fetchTreasure: id => dispatch(fetchTreasure(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureBox);