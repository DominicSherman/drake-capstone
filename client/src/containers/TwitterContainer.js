import {connect} from 'react-redux';

import Twitter from '../screens/Twitter';
import {setTwitterMedia, setTwitterUser, setTwitterUserId} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    twitterAccessToken: state.twitterAccessToken,
    twitterMedia: state.twitterMedia,
    twitterUser: state.twitterUser
});

const mapDispatchToProps = (dispatch) => ({
    setTwitterAccessToken: (accessToken) => dispatch(setTwitterUserId(accessToken)),
    setTwitterMedia: () => dispatch(setTwitterMedia()),
    setTwitterUser: () => dispatch(setTwitterUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
