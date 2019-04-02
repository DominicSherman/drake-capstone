import {chance} from './chance';

export const createRandomInstagramPost = (post = {}) => ({
    id: chance.natural(),
    link: chance.string(),
    ...post
});

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

export const createRandomTwitterStatus = (post = {}) => ({
    id: chance.natural(),
    url: chance.string(),
    ...post
});

export const createRandomTwitterUser = (user = {}) => ({
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