import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import InstagramMedia from '../../src/components/InstagramMedia';
import {createRandomInstagramPost} from '../models';
import {chance} from '../chance';
import InstagramPost from '../../src/components/InstagramPost';

describe('InstagramMedia', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<InstagramMedia {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            instagramMedia: chance.n(createRandomInstagramPost, chance.d6() + 1)
        };

        renderComponent();
    });

    it('should render a root div', () => {
        expect(renderedComponent.type).toBe('div');
    });

    it('should render an InstagramPost component for each media', () => {
        const instagramPosts = renderedComponent.props.children;

        expectedProps.instagramMedia.forEach((post, index) => {
            const renderedPost = instagramPosts[index];

            expect(renderedPost.type).toBe(InstagramPost);
            expect(renderedPost.key).toBe(post.id.toString());
            expect(renderedPost.props.post).toBe(post);
        });
    });
});
