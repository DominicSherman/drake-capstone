import {connect} from 'react-redux';
import {chance} from '../chance';
import {setInstagramAccessToken, setInstagramMedia, setInstagramUser} from '../../src/redux/action-creators';

jest.mock('redux');
jest.mock('../../src/App');
jest.mock('../../src/redux/action-creators');

describe('AppContainer', () => {
    let expectedState,
        dispatchSpy;

    const getMapStateToProps = () => connect.mock.calls[0][0];
    const getMapDispatchToProps = () => connect.mock.calls[0][1];

    beforeAll(() => {
        require('../../src/containers/AppContainer');
    });

    beforeEach(() => {
        expectedState = {
            instagramMedia: chance.string(),
            instagramUser: chance.string()
        };
        dispatchSpy = jest.fn();
    });

    it('should call connect', () => {
        expect(connect).toHaveBeenCalledTimes(1);
    });

    it('should mapStateToProps', () => {
        const actualProps = getMapStateToProps()(expectedState);

        expect(actualProps).toEqual(expectedState);
    });

    describe('mapDispatchToProps', () => {
        let actualProps;

        beforeEach(() => {
            actualProps = getMapDispatchToProps()(dispatchSpy);
        });

        it('should pass setAccessToken', () => {
            const expectedAccessToken = chance.string();

            actualProps.setAccessToken(expectedAccessToken);

            expect(dispatchSpy).toHaveBeenCalledTimes(1);
            expect(setInstagramAccessToken).toHaveBeenCalledTimes(1);
            expect(setInstagramAccessToken).toHaveBeenCalledWith(expectedAccessToken);
        });

        it('should pass setInstagramMedia', () => {
            actualProps.setInstagramMedia();

            expect(dispatchSpy).toHaveBeenCalledTimes(1);
            expect(setInstagramMedia).toHaveBeenCalledTimes(1);
        });

        it('should pass setInstagramUser', () => {
            actualProps.setInstagramUser();

            expect(dispatchSpy).toHaveBeenCalledTimes(1);
            expect(setInstagramUser).toHaveBeenCalledTimes(1);
        });
    });
});