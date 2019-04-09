import InstagramContainer from './containers/InstagramContainer';
import FacebookContainer from './containers/FacebookContainer';
import TwitterContainer from './containers/TwitterContainer';
import AnalyticsContainer from './containers/AnalyticsContainer';

export const ANALYTICS = '/';
export const INSTAGRAM = '/instagram';
export const FACEBOOK = '/facebook';
export const TWITTER = '/twitter';

export const routes = [
    {
        component: AnalyticsContainer,
        name: 'Analytics',
        path: ANALYTICS
    },
    {
        component: InstagramContainer,
        name: 'Instagram',
        path: INSTAGRAM
    },
    {
        component: FacebookContainer,
        name: 'Facebook',
        path: FACEBOOK
    },
    {
        component: TwitterContainer,
        name: 'Twitter',
        path: TWITTER
    }
];
