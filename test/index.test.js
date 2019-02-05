import Chance from 'chance';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppContainer from '../src/containers/AppContainer';

jest.mock('react-dom');

global.document = {};
global.window = {};

const chance = new Chance();

describe('index', () => {
    let globalElement;

    const requireModule = () => require('../src/index');
    const getProvider = () => reactDOM.render.mock.calls[0][0];
    const getApp = () => getProvider().props.children;

    beforeAll(() => {
        globalElement = chance.string();
        document.getElementById = jest.fn(() => globalElement);
    });

    it('should call ReactDOM with Provider, App and html element', () => {
        requireModule();

        expect(reactDOM.render).toHaveBeenCalledTimes(1);

        expect(getProvider().type).toBe(Provider);
        expect(getApp().type).toBe(AppContainer);

        const actualGlobalElement = reactDOM.render.mock.calls[0][1];

        expect(global.document.getElementById).toHaveBeenCalledTimes(1);
        expect(global.document.getElementById()).toBe(actualGlobalElement);
        expect(global.document.getElementById).toHaveBeenCalledWith('root');
    });
});
