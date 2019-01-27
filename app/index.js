import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/material-ui/theme';
import Router from './components/Router';
import routes from './router/routeConfig';
import App from './App';

const rootStyles = {
    '@global': {
        body: {
            ...theme.typography.body1
        },
    },
}

const AppWithRootStyles = withStyles(rootStyles)(App)

const render = () => (
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <AppWithRootStyles>
                    <Router routes={routes} />
                </AppWithRootStyles>
            </CssBaseline>
        </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(render(), document.getElementById('root'));
