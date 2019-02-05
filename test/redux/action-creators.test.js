import rp from 'request-promise';

import {chance} from '../chance';
import {setInstagramAccessToken} from '../../src/redux/action-creators';
import {action} from '../../src/redux/action';
import {SET_INSTAGRAM_ACCESS_TOKEN} from '../../src/redux/actions';

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

    describe('setInstagramAccessToken', () => {
        it('should return the correct action', () => {
            const expectedAccessToken = chance.string();
            const actualValue = setInstagramAccessToken(expectedAccessToken);

            expect(actualValue).toEqual(action(SET_INSTAGRAM_ACCESS_TOKEN, expectedAccessToken));
        });
    });

    describe('setInstagramUser', () => {
        it('should call request promise', () => {

        });
    });
});