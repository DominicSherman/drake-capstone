import InstagramContainer from '../containers/InstagramContainer';
import FacebookContainer from '../containers/FacebookContainer';
import TwitterContainer from '../containers/TwitterContainer';
import AnalyticsContainer from '../containers/AnalyticsContainer';

export const ANALYTICS_ROUTE = '/';
export const INSTAGRAM_ROUTE = '/instagram';
export const FACEBOOK_ROUTE = '/facebook';
export const TWITTER_ROUTE = '/twitter';

export const routes = [
    {
        component: AnalyticsContainer,
        name: 'Analytics',
        path: ANALYTICS_ROUTE
    },
    {
        component: InstagramContainer,
        name: 'Instagram',
        path: INSTAGRAM_ROUTE
    },
    {
        component: FacebookContainer,
        name: 'Facebook',
        path: FACEBOOK_ROUTE
    },
    {
        component: TwitterContainer,
        name: 'Twitter',
        path: TWITTER_ROUTE
    }
];
