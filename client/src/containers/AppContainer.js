import {connect} from 'react-redux';

import App from '../App';
import {logout, setCurrentView, tryToLoadCredentials} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    currentView: state.currentView
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    setCurrentView: (currentView) => dispatch(setCurrentView(currentView)),
    tryToLoadCredentials: () => dispatch(tryToLoadCredentials())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
