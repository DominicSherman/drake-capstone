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

export const likesColumn = {
    [FACEBOOK]: 'likes',
    [TWITTER]: 'favorite_count'
};

export const getLikes = (platform, post) => {
    if (platform === INSTAGRAM) {
        return post.likes.count;
    }

    return post[likesColumn[platform]];
};

export const commentsColumn = {
    [FACEBOOK]: '',
    [TWITTER]: 'retweet_count'
};

export const getComments = (platform, post) => {
    if (platform === INSTAGRAM) {
        return post.comments.count;
    }

    return post[commentsColumn[platform]];
};

export const timestampColumn = {
    [FACEBOOK]: 'created_time',
    [INSTAGRAM]: 'created_time',
    [TWITTER]: 'created_at'
};

export const secondaryColumnName = {
    [FACEBOOK]: '',
    [INSTAGRAM]: 'Comments',
    [TWITTER]: 'Retweets'
};
