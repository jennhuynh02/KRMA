import { connect } from 'react-redux';
import TreasureItem from './item';
import { deleteTreasure } from '../../actions/treasure_actions'

const mapStateToProps = (state, {treasure}) => ({
  treasure,
  imgUrl: treasure.url
});

const mapDispatchToProps = (dispatch, ) => ({
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureItem);