import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/material-ui/theme';
import AppShellProvider from './components/AppShell/AppShellProvider';
import AppShellLayout from './components/AppShellLayout';
import injectSaga from '../redux/utils/injectSagas';
import storageSaga from '../storage/redux/sagas';

const rootStyles = withStyles({
    '@global': {
        body: {
            ...theme.typography.body1
        },
    },
});

class Layout extends Component {
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

Layout.propTypes = {
    children: PropTypes.element,
}

export default compose(
    injectSaga({ key: 'storage', saga: storageSaga }),
    rootStyles,
)(Layout);
