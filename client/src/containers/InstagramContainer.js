import {connect} from 'react-redux';

import Instagram from '../screens/Instagram';
import {setInstagramAccessToken, setInstagramMedia, setInstagramUser} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    instagramAccessToken: state.instagramAccessToken,
    instagramMedia: state.instagramMedia,
    instagramUser: state.instagramUser
});

const mapDispatchToProps = (dispatch) => ({
    setInstagramAccessToken: (accessToken) => dispatch(setInstagramAccessToken(accessToken)),
    setInstagramMedia: () => dispatch(setInstagramMedia()),
    setInstagramUser: () => dispatch(setInstagramUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
