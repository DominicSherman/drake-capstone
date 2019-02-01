import Chance from 'chance';
import reactDOM from 'react-dom';
import App from '../src/App';

jest.mock('react-dom');

global.document = {};
global.window = {};

const chance = new Chance();

describe('index', () => {
    let globalElement;

    const requireModule = () => require('../src/index');
    const getApp = () => reactDOM.render.mock.calls[0][0];

    beforeAll(() => {
        globalElement = chance.string();
        document.getElementById = jest.fn(() => globalElement);
    });

    it('should call ReactDOM with App and html element', () => {
        requireModule();

        expect(reactDOM.render).toHaveBeenCalledTimes(1);

        expect(getApp().type).toBe(App);

        const actualGlobalElement = reactDOM.render.mock.calls[0][1];

        expect(global.document.getElementById).toHaveBeenCalledTimes(1);
        expect(global.document.getElementById()).toBe(actualGlobalElement);
        expect(global.document.getElementById).toHaveBeenCalledWith('root');
    });
});