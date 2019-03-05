import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Twitter from '../../src/screens/Twitter';

describe('Twitter', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<Twitter {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {};

        renderComponent();
    });

    it('should render a div', () => {
        expect(renderedComponent.type).toBe('div');
        expect(renderedComponent.props.children).toBe('TWITTER');
    });
});
