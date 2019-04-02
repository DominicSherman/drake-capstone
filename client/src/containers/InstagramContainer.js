import {connect} from 'react-redux';

import Instagram from '../screens/Instagram';
import {setInstagramUserId, setInstagramMedia, setInstagramUser} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    instagramMedia: state.instagramMedia,
    instagramUser: state.instagramUser,
    instagramUserId: state.instagramUserId
});

const mapDispatchToProps = (dispatch) => ({
    setInstagramMedia: () => dispatch(setInstagramMedia()),
    setInstagramUser: () => dispatch(setInstagramUser()),
    setInstagramUserId: (accessToken) => dispatch(setInstagramUserId(accessToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
