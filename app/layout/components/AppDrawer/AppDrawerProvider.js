import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwipeableDrawer, withWidth } from '@material-ui/core';

export const AppDrawerContext = React.createContext();

class AppDrawerProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            renderDrawerContent: () => null,
            drawerStyle: '',
            mainContentStyle: '',
        };
    }

    toggle = (toggle) => {
        const map = {
            'open': true,
            'close': false,
        };
        this.setState(state => ({ open: !toggle ? map[toggle] : !state.open }))
    }

    setDrawerContent = (renderDrawerContent) => {
        this.setState({ renderDrawerContent });
    }

    setDrawerStyle = (drawerStyle) => {
        this.setState({
            drawerStyle
        });
    }

    setMainContentStyle = (mainContentStyle) => {
        this.setState({ mainContentStyle });
    }

    getDrawerVariant = (width) => ({
        xs: 'temporary',
        sm: 'temporary',
        md: 'temporary',
        lg: 'permanent',
        xl: 'permanent',
    }[width]);

    render() {
        const { open, renderDrawerContent, drawerStyle, mainContentStyle } = this.state;
        const { children, width } = this.props;
        return (
            <AppDrawerContext.Provider value={{
                setDrawerContent: this.setDrawerContent,
                setMainContentStyle: this.setMainContentStyle,
                setDrawerStyle: this.setDrawerStyle,
                toggle: this.toggle,
            }}>
                <SwipeableDrawer
                    className={drawerStyle}
                    open={open}
                    anchor="left"
                    variant={this.getDrawerVariant(width)}
                    onOpen={() => this.toggle('open')}
                    onClose={() => this.toggle('close')}
                >
                    {renderDrawerContent()}
                </SwipeableDrawer>
                <div className={mainContentStyle}>
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

export default withWidth()(AppDrawerProvider);
