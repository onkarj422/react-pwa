import React from 'react';
import { adopt } from 'react-adopt'
import { ActionBarContext } from '../ActionBar/ActionBarProvider';
import { AppDrawerContext } from './AppDrawerProvider';

const ShellContext = adopt({
    actionBar: <ActionBarContext.Consumer />,
    appDrawer: <AppDrawerContext.Consumer />,
});

/*eslint-disable */
const withAppDrawer = Component => props => (
    <ShellContext>
        {context => {
            console.log(context);
            return (
                <Component {...props} shell={context} />
            );
        }}
    </ShellContext>
);

export default withAppDrawer;
