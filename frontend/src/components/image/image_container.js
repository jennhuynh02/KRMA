import { connect } from 'react-redux';
import Image from './image';

const mapStateToProps = (state, { treasure }) => ({
  imgUrl: treasure.url,
});

export default connect(mapStateToProps)(Image);
