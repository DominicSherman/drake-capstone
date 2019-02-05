import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InstagramEmbed from 'react-instagram-embed';

import InstagramPost from '../../src/components/InstagramPost';
import {createRandomInstagramPost} from '../models';

describe('InstagramPost', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<InstagramPost {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            post: createRandomInstagramPost()
        };

        renderComponent();
    });

    it('should render an InstagramEmbed', () => {
        expect(renderedComponent.type).toBe(InstagramEmbed);
    });
});
