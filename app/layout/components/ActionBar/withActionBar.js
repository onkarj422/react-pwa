import React from "react";
import { ActionBarContext } from "./ActionBarProvider";
/*eslint-disable */
const withActionBar = Component => props => (
    <ActionBarContext.Consumer>
        {context => <Component {...props} actionBar={context} />}
    </ActionBarContext.Consumer>
);

export default withActionBar;
