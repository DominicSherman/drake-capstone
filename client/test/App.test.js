import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Button, ButtonGroup} from 'react-bootstrap';

import App from '../src/App';
import {getInstagramAuthLink} from '../src/services/redirect-service';
import {ANALYTICS, FACEBOOK, INSTAGRAM, TWITTER} from '../src/constants/view-types';
import Analytics from '../src/screens/Analytics';
import Instagram from '../src/screens/Instagram';
import Twitter from '../src/screens/Twitter';
import Facebook from '../src/screens/Facebook';

import {chance} from './chance';

jest.mock('../src/services/redirect-service');

describe('App.js', () => {
    let expectedProps,
        expectedAuthLink,

        renderedComponent,
        renderedInstance,

        renderedButtonGroup,
        renderedMainComponent,

        renderedInstagramButton,
        renderedFacebookButton,
        renderedTwitterButton,
        renderedAnalyticsButton;

    const cacheChildren = () => {
        [
            renderedButtonGroup,
            renderedMainComponent
        ] = renderedComponent.props.children;

        [
            renderedInstagramButton,
            renderedFacebookButton,
            renderedTwitterButton,
            renderedAnalyticsButton
        ] = renderedButtonGroup.props.children;
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<App {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
        renderedInstance = shallowRenderer.getMountedInstance();

        cacheChildren();
    };

    beforeEach(() => {
        expectedProps = {
            currentView: chance.string(),
            setAccessToken: jest.fn(),
            setCurrentView: jest.fn(),
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

    it('should render a button group', () => {
        expect(renderedButtonGroup.type).toBe(ButtonGroup);
    });

    it('should render an instagram button', () => {
        expect(renderedInstagramButton.type).toBe(Button);
        expect(renderedInstagramButton.props.size).toBe('30');
        expect(renderedInstagramButton.props.variant).toBe('secondary');

        renderedInstagramButton.props.onClick();

        expect(expectedProps.setCurrentView).toHaveBeenCalledTimes(1);
        expect(expectedProps.setCurrentView).toHaveBeenCalledWith(INSTAGRAM);
    });

    it('should render an facebook button', () => {
        expect(renderedFacebookButton.type).toBe(Button);
        expect(renderedFacebookButton.props.size).toBe('30');
        expect(renderedFacebookButton.props.variant).toBe('secondary');

        renderedFacebookButton.props.onClick();

        expect(expectedProps.setCurrentView).toHaveBeenCalledTimes(1);
        expect(expectedProps.setCurrentView).toHaveBeenCalledWith(FACEBOOK);
    });

    it('should render an twitter button', () => {
        expect(renderedTwitterButton.type).toBe(Button);
        expect(renderedTwitterButton.props.size).toBe('30');
        expect(renderedTwitterButton.props.variant).toBe('secondary');

        renderedTwitterButton.props.onClick();

        expect(expectedProps.setCurrentView).toHaveBeenCalledTimes(1);
        expect(expectedProps.setCurrentView).toHaveBeenCalledWith(TWITTER);
    });

    it('should render an analytics button', () => {
        expect(renderedAnalyticsButton.type).toBe(Button);
        expect(renderedAnalyticsButton.props.size).toBe('30');
        expect(renderedAnalyticsButton.props.variant).toBe('secondary');

        renderedAnalyticsButton.props.onClick();

        expect(expectedProps.setCurrentView).toHaveBeenCalledTimes(1);
        expect(expectedProps.setCurrentView).toHaveBeenCalledWith(ANALYTICS);
    });

    describe('MainComponent', () => {
        it('should render Analytics View', () => {
            expectedProps.currentView = ANALYTICS;
            renderComponent();

            expect(renderedMainComponent.type).toBe(Analytics);
        });

        it('should render Instagram View', () => {
            expectedProps.currentView = INSTAGRAM;
            renderComponent();

            expect(renderedMainComponent.type).toBe(Instagram);
        });

        it('should render Twitter View', () => {
            expectedProps.currentView = TWITTER;
            renderComponent();

            expect(renderedMainComponent.type).toBe(Twitter);
        });

        it('should render Facebook View', () => {
            expectedProps.currentView = FACEBOOK;
            renderComponent();

            expect(renderedMainComponent.type).toBe(Facebook);
        });
    });
});
