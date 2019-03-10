import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwipeableDrawer, withStyles, withWidth } from '@material-ui/core';

export const AppDrawerContext = React.createContext();

const styled = withStyles(theme => ({
    mainContent: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: 240,
        },
    }
}));

class AppDrawerProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            renderContent: () => null,
            className: '',
        };
    }

    setContent = (renderContent) => {
        this.setState({ renderContent });
    }

    toggle = (toggle) => {
        const map = {
            'open': true,
            'close': false,
        };
        this.setState(state => ({ open: !toggle ? map[toggle] : !state.open }))
    }

    getDrawerVariant = (width) => ({
        xs: 'temporary',
        sm: 'temporary',
        md: 'permanent',
    }[width]);

    render() {
        const { open, renderContent, className } = this.state;
        const { classes: { mainContent }, children, width } = this.props;
        return (
            <AppDrawerContext.Provider value={{
                setContent: this.setContent,
                toggle: this.toggle,
            }}>
                <SwipeableDrawer
                    className={className}
                    open={open}
                    anchor="left"
                    variant={this.getDrawerVariant(width)}
                    onOpen={() => this.toggle('open')}
                    onClose={() => this.toggle('close')}
                >
                    {renderContent()}
                </SwipeableDrawer>
                <div className={mainContent}>
                    {children}
                </div>
            </AppDrawerContext.Provider>
        );
    }
}

AppDrawerProvider.propTypes = {
    classes: PropTypes.instanceOf(Object),
    width: PropTypes.string,
    children: PropTypes.node,
}

export default withWidth()(styled(AppDrawerProvider));
