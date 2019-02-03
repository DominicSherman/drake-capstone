import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InstagramUserInfo from '../../src/components/InstagramUserInfo';
import {createRandomInstagramUser} from '../models';

describe('InstagramUserInfo', () => {
    let expectedProps,

        renderedComponent;

    const cacheChildren = () => {};

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<InstagramUserInfo {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
    };

    beforeEach(() => {
        expectedProps = {
            instagramUser: createRandomInstagramUser()
        };

        renderComponent();
    });

    it('should render a root div if there is an instagramUser', () => {
        expect(renderedComponent.type).toBe('div');
    });

    it('should render null if there is not an instagramUser', () => {
        expectedProps.instagramUser = {};
        renderComponent();

        expect(renderedComponent).toBeNull()
    });
});