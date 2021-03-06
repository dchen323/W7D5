import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id]
});

const mapDispatchToProp = dispatch => ({
  logout: () => dispatch(logout())
});



export default(connect(mapStateToProps,mapDispatchToProp)(Greeting));
