import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../src/App';

describe('App.js', () => {
    let renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<App />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        renderComponent();
    });

    it('should render a root div', () => {
        expect(renderedComponent.type).toBe('div');
    });
});
