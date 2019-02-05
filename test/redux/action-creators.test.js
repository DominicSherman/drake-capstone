import rp from 'request-promise';

import {chance} from '../chance';
import {setInstagramAccessToken, setInstagramMedia, setInstagramUser} from '../../src/redux/action-creators';
import {action} from '../../src/redux/action';
import {SET_INSTAGRAM_ACCESS_TOKEN, SET_INSTAGRAM_MEDIA, SET_INSTAGRAM_USER} from '../../src/redux/actions';
import {INSTAGRAM_MEDIA, INSTAGRAM_USER_INFO} from '../../src/constants/endpoints';

jest.mock('request-promise');

describe('action-creators', () => {
    let expectedState,
        dispatchSpy,
        getStateStub,
        thunk;

    beforeEach(() => {
        expectedState = {
            instagramAccessToken: chance.string()
        };
        dispatchSpy = jest.fn();
        getStateStub = jest.fn(() => expectedState);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('setInstagramAccessToken', () => {
        it('should return the correct action', () => {
            const expectedAccessToken = chance.string();
            const actualValue = setInstagramAccessToken(expectedAccessToken);

            expect(actualValue).toEqual(action(SET_INSTAGRAM_ACCESS_TOKEN, expectedAccessToken));
        });
    });

    describe('setInstagramUser', () => {
        let expectedResponse;

        beforeEach(() => {
            expectedResponse = {
                data: chance.string()
            };

            rp.mockReturnValue(expectedResponse);

            thunk = setInstagramUser();
        });

        it('should call request promise', async () => {
            await thunk(dispatchSpy, getStateStub);

            expect(rp).toHaveBeenCalledTimes(1);
            expect(rp).toHaveBeenCalledWith({
                json: true,
                qs: {access_token: expectedState.instagramAccessToken},
                uri: INSTAGRAM_USER_INFO
            });
        });

        it('should dispatch an action with the data', async () => {
            await thunk(dispatchSpy, getStateStub);

            expect(dispatchSpy).toHaveBeenCalledTimes(1);
            expect(dispatchSpy).toHaveBeenCalledWith(action(SET_INSTAGRAM_USER, expectedResponse.data));
        });
    });

    describe('setInstagramMedia', () => {
        let expectedResponse;

        beforeEach(() => {
            expectedResponse = {
                data: chance.string()
            };

            rp.mockReturnValue(expectedResponse);

            thunk = setInstagramMedia();
        });

        it('should call request promise', async () => {
            await thunk(dispatchSpy, getStateStub);

            expect(rp).toHaveBeenCalledTimes(1);
            expect(rp).toHaveBeenCalledWith({
                json: true,
                qs: {access_token: expectedState.instagramAccessToken},
                uri: INSTAGRAM_MEDIA
            });
        });

        it('should dispatch an action with the data', async () => {
            await thunk(dispatchSpy, getStateStub);

            expect(dispatchSpy).toHaveBeenCalledTimes(1);
            expect(dispatchSpy).toHaveBeenCalledWith(action(SET_INSTAGRAM_MEDIA, expectedResponse.data));
        });
    });
});
