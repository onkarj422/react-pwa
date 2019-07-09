import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styledLayout from './styles';
import withAppShellContext from '../AppShell/withAppShellContext';

class AppShellLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = () => {
        const { shell: { actionBar, appDrawer }, classes: { mainContent } } = this.props;
        actionBar.setConfig({
            actionLeft: this.renderLeftMenu(),
        });
        appDrawer.setDrawerContent(this.renderDrawerContent);
        appDrawer.setMainContentStyle(mainContent);
    }

    renderDrawerContent = () => {
        const { classes: { drawer } } = this.props;
        return (
            <div className={drawer}>
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

AppShellLayout.propTypes = {
    shell: PropTypes.instanceOf(Object),
    classes: PropTypes.instanceOf(Object),
    children: PropTypes.node,
};

export default withAppShellContext(styledLayout(AppShellLayout));
