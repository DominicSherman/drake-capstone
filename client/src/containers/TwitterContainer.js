import {connect} from 'react-redux';

import Twitter from '../screens/Twitter';
import {setTwitterUser, setTwitterUserId} from '../redux/action-creators';

const mapStateToProps = (state) => ({
    twitterUser: state.twitterUser,
    twitterUserId: state.twitterUserId
});

const mapDispatchToProps = (dispatch) => ({
    setTwitterUser: () => dispatch(setTwitterUser()),
    setTwitterUserId: (userId) => dispatch(setTwitterUserId(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
