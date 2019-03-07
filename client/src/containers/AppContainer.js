import {connect} from 'react-redux';

import App from '../App';
import {setCurrentView} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    currentView: state.currentView
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentView: (currentView) => dispatch(setCurrentView(currentView))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
