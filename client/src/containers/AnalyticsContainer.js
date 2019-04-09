import {connect} from 'react-redux';

import Analytics from '../screens/Analytics';
import {setFacebookUser, setInstagramMedia, setInstagramUser, setTwitterUser} from '../redux/action-creators';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    setFacebookUser: () => dispatch(setFacebookUser()),
    setInstagramMedia: () => dispatch(setInstagramMedia()),
    setInstagramUser: () => dispatch(setInstagramUser()),
    setTwitterUser: () => dispatch(setTwitterUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);