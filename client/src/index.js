import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

import reducer from './redux/reducer';
import AppContainer from './containers/AppContainer';
import {initializeFirebase} from './services/firebase-service';
import {tryToLoadCredentials} from './redux/action-creators';

const store = createStore(reducer, applyMiddleware(thunk));

initializeFirebase();
store.dispatch(tryToLoadCredentials());

const App = withRouter(AppContainer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
