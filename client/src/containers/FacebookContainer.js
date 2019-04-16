import {connect} from 'react-redux';

import Facebook from '../screens/Facebook';
import {setFacebookMedia, setFacebookUser, setFacebookUserId} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    facebookUser: state.facebookUser,
    facebookUserId: state.facebookUserId
});

const mapDispatchToProps = (dispatch) => ({
    setFacebookMedia: () => dispatch(setFacebookMedia()),
    setFacebookUser: () => dispatch(setFacebookUser()),
    setFacebookUserId: (userId) => dispatch(setFacebookUserId(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
