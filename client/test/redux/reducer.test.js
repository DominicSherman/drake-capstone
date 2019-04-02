import {chance} from '../chance';
import reducer from '../../src/redux/reducer';
import {
    SET_CURRENT_VIEW,
    SET_INSTAGRAM_USER_ID,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER
} from '../../src/redux/actions';
import {INSTAGRAM} from '../../src/constants/view-types';

describe('reducer', () => {
    const defaultState = {
        currentView: INSTAGRAM,
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

    it('should set instagramAccessToken when the action is SET_INSTAGRAM_USER_ID', () => {
        const originalState = {
            [chance.string()]: chance.string(),
            instagramAccessToken: chance.bool()
        };

        const expectedData = chance.bool();
        const action = {
            data: expectedData,
            type: SET_INSTAGRAM_USER_ID
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

    it('should set currentView when the action is SET_CURRENT_VIEW', () => {
        const originalState = {
            [chance.string()]: chance.string(),
            currentView: chance.string()
        };

        const expectedData = chance.string();
        const action = {
            data: expectedData,
            type: SET_CURRENT_VIEW
        };

        const actualState = reducer(originalState, action);

        expect(actualState).toEqual({
            ...originalState,
            currentView: expectedData
        });
    });
});
