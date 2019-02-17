import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwipeableDrawer, withStyles, withWidth } from '@material-ui/core';

const styled = withStyles({
    root: {
        display: 'flex',
    }
});

class AppDrawerProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            renderContent: () => null,
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

    render() {
        const { open, renderContent, classes } = this.state;
        return (
            <div className={classes.root}>
                <SwipeableDrawer
                    open={open}
                    onOpen={() => this.toggle('open')}
                    onClose={() => this.toggle('close')}
                >
                    {renderContent()}
                </SwipeableDrawer>
                <main>
                    Main Content
                </main>
            </div>
        );
    }
}

AppDrawerProvider.propTypes = {
    classes: PropTypes.instanceOf(Object),
    width: PropTypes.string,
}

export default styled(withWidth(AppDrawerProvider));
