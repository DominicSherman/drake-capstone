import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {routes} from './routes';

export default class Routing extends Component {
    render() {
        return (
            <div>
                {routes.map((route) =>
                    <Route
                        component={route.component}
                        exact
                        key={route.path}
                        path={route.path}
                    />
                )}
            </div>
        );
    }
}
