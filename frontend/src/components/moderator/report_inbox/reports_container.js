import { connect } from 'react-redux';
import ReportsPage from './reports_page';
import { updateTreasure, deleteTreasure, fetchTreasures } from '../../../actions/treasure_actions';

const mapStateToProps = state => ({
  treasures: Object.values(state.treasure.admin),
});

const mapDispatchToProps = dispatch => ({
  fetchTreasures: () => dispatch(fetchTreasures()),
  updateTreasure: (treasure) => dispatch(updateTreasure(treasure)),
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage);