import {connect} from 'react-redux';

import App from '../App';
import {setCurrentView, setInstagramAccessToken, setInstagramMedia, setInstagramUser} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    currentView: state.currentView,
    instagramAccessToken: state.instagramAccessToken,
    instagramMedia: state.instagramMedia,
    instagramUser: state.instagramUser
});

const mapDispatchToProps = (dispatch) => ({
    setInstagramAccessToken: (accessToken) => dispatch(setInstagramAccessToken(accessToken)),
    setCurrentView: (currentView) => dispatch(setCurrentView(currentView)),
    setInstagramMedia: () => dispatch(setInstagramMedia()),
    setInstagramUser: () => dispatch(setInstagramUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
