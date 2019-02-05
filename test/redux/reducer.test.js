import {chance} from '../chance';
import reducer from '../../src/redux/reducer';
import {SET_INSTAGRAM_ACCESS_TOKEN, SET_INSTAGRAM_MEDIA, SET_INSTAGRAM_USER} from '../../src/redux/actions';

describe('reducer', () => {
    const defaultState = {
        instagramAccessToken: null,
        instagramMedia: [],
        instagramUser: {}
    };

    let anyAction;

    beforeEach(() => {
        anyAction = chance.string();
    });

    it('should return state if an action fails to match', () => {
        const expectedState = chance.string();

        const actualState = reducer(expectedState, anyAction);

        expect(actualState).toBe(expectedState);
    });

    it('should return the default state if not called with state', () => {
        const actualState = reducer(undefined, anyAction);

        expect(actualState).toEqual(defaultState);
    });

    it('should set instagramAccessToken when the action is SET_INSTAGRAM_ACCESS_TOKEN', () => {
        const originalState = {
            [chance.string()]: chance.string(),
            instagramAccessToken: chance.bool()
        };

        const expectedData = chance.bool();
        const action = {
            data: expectedData,
            type: SET_INSTAGRAM_ACCESS_TOKEN
        };

        const actualState = reducer(originalState, action);

        expect(actualState).toEqual({
            ...originalState,
            instagramAccessToken: expectedData
        });
    });

    it('should set instagramMedia when the action is SET_INSTAGRAM_MEDIA', () => {
        const originalState = {
            [chance.string()]: chance.string(),
            instagramMedia: chance.bool()
        };

        const expectedData = chance.bool();
        const action = {
            data: expectedData,
            type: SET_INSTAGRAM_MEDIA
        };

        const actualState = reducer(originalState, action);

        expect(actualState).toEqual({
            ...originalState,
            instagramMedia: expectedData
        });
    });

    it('should set instagramUser when the action is SET_INSTAGRAM_USER', () => {
        const originalState = {
            [chance.string()]: chance.string(),
            instagramUser: chance.bool()
        };

        const expectedData = chance.bool();
        const action = {
            data: expectedData,
            type: SET_INSTAGRAM_USER
        };

        const actualState = reducer(originalState, action);

        expect(actualState).toEqual({
            ...originalState,
            instagramUser: expectedData
        });
    });
});
