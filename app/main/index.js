import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/material-ui/theme';
import AppShellProvider from '../components/AppShell/AppShellProvider';
import AppShellLayout from '../components/AppShell/AppShellLayout';

const rootStyles = withStyles({
    '@global': {
        body: {
            ...theme.typography.body1
        },
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const { children } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline>
                    <AppShellProvider>
                        <AppShellLayout>
                            {children}
                        </AppShellLayout>
                    </AppShellProvider>
                </CssBaseline>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
}

export default rootStyles(App);
