import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import ActionBar from '.';

export const ActionBarContext = React.createContext();

const styled = withStyles({
    content: {
        padding: 10
    }
});

class ActionBarProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Default',
            subTitle: '',
            actionLeft: null,
            actionsRight: [],
        };
    }

    set = (state) => {
        this.setState(state);
    }

    render() {
        const { classes, children } = this.props;
        return (
            <ActionBarContext.Provider value={{
                state: this.state,
                setConfig: this.set
            }}>
                <ActionBar {...this.state} />
                <div className={classes.content}>
                    {children}
                </div>
            </ActionBarContext.Provider>
        );
    }
}

ActionBarProvider.propTypes = {
    classes: PropTypes.instanceOf(Object),
    children: PropTypes.node
};

export default styled(ActionBarProvider);
