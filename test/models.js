import {chance} from './chance';

export const createRandomInstagramPost = (post = {}) => ({
    id: chance.natural(),
    link: chance.string(),
    ...post
});

/* eslint-disable camelcase */
export const createRandomInstagramUser = (user = {}) => ({
    bio: chance.string(),
    counts: {
        followed_by: chance.natural(),
        follows: chance.natural(),
        media: chance.natural()
    },
    id: chance.natural(),
    profile_picture: chance.string(),
    ...user
});
/* eslint-enable camelcase */
