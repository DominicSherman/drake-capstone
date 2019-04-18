import {INSTAGRAM, TWITTER, FACEBOOK} from '../constants/analytic-types';

export const followersColumn = {
    [INSTAGRAM]: 'follower_count',
    [TWITTER]: 'followers_count'
};

export const followingColumn = {
    [INSTAGRAM]: 'following_count',
    [TWITTER]: 'friends_count'
};

export const friendsColumn = {
    [FACEBOOK]: 'friends.summary.total_count',
    [INSTAGRAM]: 'follower_count',
    [TWITTER]: 'followers_count'
}
