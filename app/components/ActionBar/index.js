import React from 'react';
import PropTypes from 'prop-types';
import { Typography, AppBar, Toolbar, withStyles } from '@material-ui/core';

const style = withStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    leftAction: {
        marginLeft: -12,
        marginRight: 20,
    },
    content: {
        padding: 10
    }
});

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { position, title, classes, actionLeft, actionsRight } = this.props;
        return (
            <AppBar className={classes.root} position={position}>
                <Toolbar>
                    <If condition={actionLeft}>
                        <div className={classes.leftAction}>
                            {actionLeft}
                        </div>
                    </If>
                    <Typography className={classes.grow} variant="h6" color="inherit">{title}</Typography>
                    <If condition={actionsRight}>
                        {actionsRight}
                    </If>
                </Toolbar>
            </AppBar>
        );
    }
}

ActionBar.defaultProps = {
    title: 'Default Title',
    position: 'static',
};

ActionBar.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    position: PropTypes.string,
    classes: PropTypes.instanceOf(Object),
    actionLeft: PropTypes.element,
    actionsRight: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
};

export default style(ActionBar);
