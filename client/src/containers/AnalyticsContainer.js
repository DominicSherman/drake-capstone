import {connect} from 'react-redux';

import Analytics from '../screens/Analytics';
import {
    setFacebookUser,
    setInstagramMedia,
    setInstagramUser,
    setTwitterMedia,
    setTwitterUser
} from '../redux/action-creators';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    setFacebookUser: () => dispatch(setFacebookUser()),
    setInstagramMedia: () => dispatch(setInstagramMedia()),
    setInstagramUser: () => dispatch(setInstagramUser()),
    setTwitterMedia: () => dispatch(setTwitterMedia()),
    setTwitterUser: () => dispatch(setTwitterUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
