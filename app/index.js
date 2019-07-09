import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import Router from './router/components/Router';
import routes from './router/routeConfig';
import Layout from './layout';
import configureStore, { history } from './redux/configureStore';

const initialState = Immutable.Map();
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <Router routes={routes} />
            </Layout>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(render(), MOUNT_NODE);
