import {connect} from 'react-redux';
import App from '../App';
import {setInstagramAccessToken, setInstagramMedia, setInstagramUser} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    instagramMedia: state.instagramMedia,
    instagramUser: state.instagramUser
});

const mapDispatchToProps = (dispatch) => ({
    setAccessToken: (accessToken) => dispatch(setInstagramAccessToken(accessToken)),
    setInstagramMedia: () => dispatch(setInstagramMedia()),
    setInstagramUser: () => dispatch(setInstagramUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);