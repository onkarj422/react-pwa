import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionBarProvider from '../ActionBar/ActionBarProvider';

class AppShell extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const { children } = this.props;
        return (
            <ActionBarProvider>
                {children}
            </ActionBarProvider>
        );
    }
}

AppShell.propTypes = {
    children: PropTypes.element,
}


export default AppShell;
