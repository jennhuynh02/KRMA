import { connect } from 'react-redux';
import TreasureItem from './item';

const mapStateToProps = (state, {treasure}) => ({
  imgUrl: treasure.url
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TreasureItem);