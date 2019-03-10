/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { AppShellContext } from './AppShellProvider';

const withAppShell = Component => props => (
    <AppShellContext>
        {shell => <Component {...props} shell={shell} />}
    </AppShellContext>
)

export default withAppShell;
