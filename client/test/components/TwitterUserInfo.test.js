import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TwitterUserInfo from '../../src/components/TwitterUserInfo';
import {createRandomTwitterUser} from '../models';

describe('TwitterUserInfo', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<TwitterUserInfo {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            twitterUser: createRandomTwitterUser()
        };

        renderComponent();
    });

    it('should render a root div if there is an twitterUser', () => {
        expect(renderedComponent.type).toBe('div');
    });

    it('should render null if there is not an twitterUser', () => {
        expectedProps.twitterUser = {};
        renderComponent();

        expect(renderedComponent).toBeNull();
    });
});
