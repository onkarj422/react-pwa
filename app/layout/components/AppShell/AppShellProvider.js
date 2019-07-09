import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { adopt } from 'react-adopt';
import ActionBarProvider, { ActionBarContext } from '../ActionBar/ActionBarProvider';
import AppDrawerProvider, { AppDrawerContext } from '../AppDrawer/AppDrawerProvider';

export const AppShellContext = adopt({
    actionBar: <ActionBarContext.Consumer />,
    appDrawer: <AppDrawerContext.Consumer />,
});

class AppShellProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const { children } = this.props;
        return (
            <AppDrawerProvider>
                <ActionBarProvider>
                    {children}
                </ActionBarProvider>
            </AppDrawerProvider>
        );
    }
}

AppShellProvider.propTypes = {
    children: PropTypes.element,
}

export default AppShellProvider;
