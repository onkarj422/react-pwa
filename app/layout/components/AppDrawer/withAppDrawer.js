import React from 'react';
import { AppDrawerContext } from './AppDrawerProvider';

/*eslint-disable */
const withAppDrawer = Component => props => (
    <AppDrawerContext.Consumer>
        {context => {
            return (
                <Component {...props} appDrawer={context} />
            );
        }}
    </AppDrawerContext.Consumer>
);

export default withAppDrawer;
