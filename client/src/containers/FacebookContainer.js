import {connect} from 'react-redux';

import Facebook from '../screens/Facebook';
import {setFacebookAccessToken} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    facebookAccessToken: state.facebookAccessToken
});

const mapDispatchToProps = (dispatch) => ({
    setFacebookAccessToken: (accessToken) => dispatch(setFacebookAccessToken(accessToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
