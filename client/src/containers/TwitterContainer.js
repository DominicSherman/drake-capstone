import {connect} from 'react-redux';

import Twitter from '../screens/Twitter';
import {setTwitterMedia, setTwitterUser, setTwitterAccessToken} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    twitterAccessToken: state.twitterAccessToken,
    twitterMedia: state.twitterMedia,
    twitterUser: state.twitterUser
});

const mapDispatchToProps = (dispatch) => ({
    setTwitterAccessToken: (accessToken) => dispatch(setTwitterAccessToken(accessToken)),
    setTwitterMedia: () => dispatch(setTwitterMedia()),
    setTwitterUser: () => dispatch(setTwitterUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
