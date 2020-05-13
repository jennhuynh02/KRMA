import { connect } from 'react-redux';
import Collection from './collection'

const mapStateToProps = state => ({
  firstName: state.session.user.firstName
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);