import {connect} from 'react-redux';

import Twitter from '../screens/Twitter';
import {setTwitterMedia, setTwitterUser, setTwitterUserId} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    twitterUser: state.twitterUser,
    twitterUserId: state.twitterUserId
});

const mapDispatchToProps = (dispatch) => ({
    setTwitterMedia: () => dispatch(setTwitterMedia()),
    setTwitterUser: () => dispatch(setTwitterUser()),
    setTwitterUserId: (userId) => dispatch(setTwitterUserId(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
