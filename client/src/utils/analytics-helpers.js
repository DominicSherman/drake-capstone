import {INSTAGRAM, TWITTER} from '../constants/analytic-types';

export const followersColumn = {
    [INSTAGRAM]: 'follower_count',
    [TWITTER]: 'followers_count'
};

export const followingColumn = {
    [INSTAGRAM]: 'following_count',
    [TWITTER]: 'friends_count'
};
