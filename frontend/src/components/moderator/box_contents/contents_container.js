import { connect } from 'react-redux';
import { fetchTreasures } from '../../../actions/treasure_actions';
import TreasureContentsPage from './contents.jsx';

const mapStateToProps = (state) => ({
  allTreasures: Object.values(state.treasure.admin),
});

const mapDispatchToProps = (dispatch) => ({
  getAllTreasures: () => dispatch(fetchTreasures()),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(TreasureContentsPage);
