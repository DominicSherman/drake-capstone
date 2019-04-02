import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TwitterTweetEmbed from 'react-twitter-embed';

import TwitterMedia from '../../src/components/TwitterMedia';
import {createRandomTwitterStatus} from '../models';
import {chance} from '../chance';

describe('TwitterMedia', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<TwitterMedia {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            twitterMedia: chance.n(createRandomTwitterStatus, chance.d6() + 1)
        };

        renderComponent();
    });

    it('should render a root div', () => {
        expect(renderedComponent.type).toBe('div');
    });

    it('should render a Tweet component for each media', () => {
        const renderedTweets = renderedComponent.props.children;

        expectedProps.twitterMedia.forEach((post, index) => {
            const renderedPost = renderedTweets[index];

            expect(renderedPost.type).toBe(TwitterTweetEmbed);
            expect(renderedPost.key).toBe(post.id.toString());
            expect(renderedPost.props.url).toBe(post.url);
        });
    });
});
