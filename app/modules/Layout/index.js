import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import withAppShell from '../../components/AppShell/withAppShell';

const styled = withStyles(theme => ({
    drawer: {
        padding: 10,
        width: 240,
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    layout: {
        padding: 10,
    },
}));

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = () => {
        const { shell: { actionBar, appDrawer } } = this.props;
        actionBar.setConfig({
            actionLeft: this.renderLeftMenu(),
        });
        appDrawer.setContent(this.renderDrawerContent);
    }

    renderDrawerContent = () => {
        const { classes } = this.props;
        return (
            <div className={classes.drawer}>
                Drawer content!
            </div>
        );
    };

    renderLeftMenu = () => {
        const { shell: { appDrawer: { toggle } }, classes: { menuButton } } = this.props;
        return (
            <IconButton className={menuButton} onClick={toggle} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
        );
    }

    render() {
        const { children, classes: { layout } } = this.props;
        return (
            <div className={layout}>
                {children}
            </div>
        );
    }
}

Layout.propTypes = {
    shell: PropTypes.instanceOf(Object),
    classes: PropTypes.instanceOf(Object),
    children: PropTypes.node,
};

export default withAppShell(styled(Layout));
