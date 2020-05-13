import { connect } from 'react-redux';
import Treasure from './treasure_container'

const mapStateToProps = (state, ownProps) => ({
    treasureId: ownProps.match.params.treasureId,
    currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
    fetchTreasure: treasureId => dispatch(fetchTreasure(treasureId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Treasure)