import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InstagramPost from '../../src/components/InstagramPost';
import {createRandomInstagramPost} from '../models';
import InstagramEmbed from 'react-instagram-embed';

describe('InstagramPost', () => {
    let expectedProps,

        renderedComponent;

    const cacheChildren = () => {};

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<InstagramPost {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
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