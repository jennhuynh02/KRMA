import { connect } from 'react-redux';
import Image from './image';
// import { deleteTreasure } from '../../actions/treasure_actions'

const mapStateToProps = (state, {treasure}) => ({
  treasure,
  imgUrl: treasure.url
});

const mapDispatchToProps = (dispatch, ) => ({
  // deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);