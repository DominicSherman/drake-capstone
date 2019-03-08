import {connect} from 'react-redux';

import Twitter from '../screens/Twitter';
import {setTwitterAccessToken} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    twitterAccessToken: state.twitterAccessToken
});

const mapDispatchToProps = (dispatch) => ({
    setTwitterAccessToken: (accessToken) => dispatch(setTwitterAccessToken(accessToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
