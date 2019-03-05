import {getInstagramAuthLink, getRedirectUri} from '../../src/services/redirect-service';
import {INSTAGRAM_CLIENT_ID, LOCAL_REDIRECT_URI, REDIRECT_URI} from '../../src/config';
import {chance} from '../chance';

describe('redirect-service', () => {
    describe('getRedirectUri', () => {
        it('should return LOCAL_REDIRECT_URI if it is localhost', () => {
            global.window = {
                location: {
                    hostname: 'localhost'
                }
            };

            const actualValue = getRedirectUri();

            expect(actualValue).toEqual(LOCAL_REDIRECT_URI);
        });

        it('should return REDIRECT_URI if it is localhost', () => {
            global.window = {
                location: {
                    hostname: chance.string()
                }
            };

            const actualValue = getRedirectUri();

            expect(actualValue).toEqual(REDIRECT_URI);
        });
    });

    describe('getInstagramAuthLink', () => {
        it('should return the correct link', () => {
            global.window = {
                location: {
                    hostname: chance.string()
                }
            };

            const actualValue = getInstagramAuthLink();

            expect(actualValue).toEqual(`https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`);
        });
    });
});
