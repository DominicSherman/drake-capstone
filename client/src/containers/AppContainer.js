import {connect} from 'react-redux';

import App from '../App';
import {logout, tryToLoadCredentials} from '../redux/action-creators';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    tryToLoadCredentials: () => dispatch(tryToLoadCredentials())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
