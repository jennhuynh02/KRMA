import { connect } from 'react-redux';
import AdminContentItem from './admin_item'

const mapStateToProps = (state, {treasure}) => ({
  imgUrl: treasure.url
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentItem);