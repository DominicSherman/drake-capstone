import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import AppContainer from './containers/AppContainer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
