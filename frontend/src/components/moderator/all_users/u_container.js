import { connect } from 'react-redux';
import User from './u';

const mapStateToProps = (state, {user}) => ({
  user
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(User);