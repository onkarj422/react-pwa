import React from 'react';
import PropTypes from 'prop-types';
import { SwipeableDrawer } from '@material-ui/core';

const drawerWidth = 240;

const styled = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class AppDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const { open, onClose, variant, children } = this.props;
        return (
            <SwipeableDrawer
                open={open}
                onClose={onClose}
                variant={variant}
            >
                {children}
            </SwipeableDrawer>
        );
    }
}

AppDrawer.propTypes = {
    ...SwipeableDrawer.propTypes,
    // open: PropTypes.bool,
    // onClose: PropTypes.func,
    // onOpen: PropTypes.func,
    // variant: PropTypes.string,

};

export default styled(AppDrawer);
