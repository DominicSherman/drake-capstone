import {connect} from 'react-redux';

import Facebook from '../screens/Facebook';
import {setFacebookUser, setFacebookUserId} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    facebookUser: state.facebookUser,
    facebookUserId: state.facebookUserId
});

const mapDispatchToProps = (dispatch) => ({
    setFacebookUser: () => dispatch(setFacebookUser()),
    setFacebookUserId: (userId) => dispatch(setFacebookUserId(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
