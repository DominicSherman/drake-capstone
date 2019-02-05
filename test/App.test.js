import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../src/App';
import {getInstagramAuthLink} from '../src/services/redirect-service';

import {chance} from './chance';

jest.mock('../src/services/redirect-service');

describe('App.js', () => {
    let expectedProps,
        renderedComponent,
        renderedInstance,
        expectedAuthLink;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<App {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
        renderedInstance = shallowRenderer.getMountedInstance();
    };

    beforeEach(() => {
        expectedProps = {
            setAccessToken: jest.fn(),
            setInstagramMedia: jest.fn(),
            setInstagramUser: jest.fn()
        };
        expectedAuthLink = chance.string();

        getInstagramAuthLink.mockReturnValue(expectedAuthLink);
        renderComponent();
    });

    describe('componentDidMount', () => {
        it('should set the href to be the auth link if there is not a hash', () => {
            global.window = {
                location: {
                    hash: null
                }
            };

            renderedInstance.componentDidMount();

            expect(global.window.location.href).toBe(expectedAuthLink);
        });

        it('should call the action creators if there is a hash', () => {
            const expectedHash = chance.string();

            global.window = {
                location: {
                    hash: expectedHash
                }
            };

            renderedInstance.componentDidMount();

            expect(expectedProps.setAccessToken).toHaveBeenCalledTimes(1);
            expect(expectedProps.setAccessToken).toHaveBeenCalledWith(expectedHash.substr(14));
            expect(expectedProps.setInstagramUser).toHaveBeenCalledTimes(1);
            expect(expectedProps.setInstagramMedia).toHaveBeenCalledTimes(1);
        });
    });

    it('should render a root div', () => {
        expect(renderedComponent.type).toBe('div');
    });
});
