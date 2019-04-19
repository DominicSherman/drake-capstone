import {INSTAGRAM, TWITTER, FACEBOOK} from '../constants/analytic-types';

export const followersColumn = {
    [INSTAGRAM]: 'follower_count',
    [TWITTER]: 'followers_count'
};

export const followingColumn = {
    [INSTAGRAM]: 'following_count',
    [TWITTER]: 'friends_count'
};

export const getFriendsOrFollowers = (platform, user) => {
    if (platform === FACEBOOK) {
        return user.friends.summary.total_count;
    }

    return user[followersColumn[platform]];
};
