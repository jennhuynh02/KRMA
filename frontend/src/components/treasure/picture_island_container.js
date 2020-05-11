import { connect } from 'react-redux';
import { fetchTreasure } from '../../actions/treasure_actions';
import CreateTreasure from './picture_island';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    errors: state.errors.treasure
});

const mapDispatchToProps = dispatch => ({
    fetchRandomTreasure: () => dispatch(fetchRandomTreasure(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTreasure);