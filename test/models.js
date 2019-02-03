import {chance} from './chance';

export const createRandomInstagramPost = (post = {}) => ({
    id: chance.natural(),
    link: chance.string(),
    ...post
});

export const createRandomInstagramUser = (user = {}) => ({
    id: chance.natural(),
    profile_picture: chance.string(),
    bio: chance.string(),
    counts: {
        media: chance.natural(),
        follows: chance.natural(),
        followed_by: chance.natural()
    },
    ...user
});