import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import routes from './router/routeConfig';
import App from './main';

const render = () => (
    <BrowserRouter>
        <App>
            <Router routes={routes} />
        </App>
    </BrowserRouter>
);

ReactDOM.render(render(), document.getElementById('root'));
