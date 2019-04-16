export const setInstagramData = (props, userId = null) => {
    const {
        instagramUserId,
        instagramUser,
        setInstagramUser,
        setInstagramMedia,
        setInstagramUserId
    } = props;

    if (userId) {
        setInstagramUserId(userId);
        setInstagramUser(userId);
        setInstagramMedia(userId);
    }

    if (instagramUserId && !instagramUser.name) {
        setInstagramUser();
        setInstagramMedia();
    }
};

export const setTwitterData = (props, userId = null) => {
    const {
        twitterUserId,
        twitterUser,
        setTwitterUser,
        setTwitterMedia,
        setTwitterUserId
    } = props;

    if (userId) {
        setTwitterUserId(userId);
        setTwitterUser(userId);
        setTwitterMedia(userId);
    }

    if (twitterUserId && !twitterUser.name) {
        setTwitterUser();
        setTwitterMedia();
    }
};

export const setFacebookData = (props, userId = null) => {
    const {
        facebookUserId,
        facebookUser,
        setFacebookUser,
        setFacebookMedia,
        setFacebookUserId
    } = props;

    if (userId) {
        setFacebookUserId(userId);
        setFacebookUser(userId);
        setFacebookMedia(userId);
    }

    if (facebookUserId && !facebookUser.name) {
        setFacebookUser();
        setFacebookMedia();
    }
};
