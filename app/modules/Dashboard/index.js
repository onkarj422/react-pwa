import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import withActionBar from '../../components/ActionBar/withActionBar';

const styled = withStyles(theme => ({
    actionBar: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 240
        }
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClicked: false,
        };
    }

    componentDidMount = () => {
        const { actionBar, classes } = this.props;
        actionBar.setConfig({
            title: 'Dashboard',
            actionLeft: this.renderLeftMenu(),
            className: classes.actionBar,
        });
    }

    setClickMenu = () => {
        this.setState(state => ({
            menuClicked: !state.menuClicked,
        }));
    }

    renderLeftMenu = () => {
        const { classes: { menuButton } } = this.props;
        return (
            <IconButton className={menuButton} onClick={this.setClickMenu} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
        )
    }

    render() {
        const { children } = this.props;
        const { menuClicked } = this.state;
        return (
            <div>
                <If condition={menuClicked}>
                    Clicked menu just now!
                </If>
                {children}
            </div>
        );
    }
}

Dashboard.defaultProps = {
    children: <></>
}

Dashboard.propTypes = {
    children: PropTypes.element,
    actionBar: PropTypes.instanceOf(Object),
    classes: PropTypes.instanceOf(Object),
};

export default withActionBar(styled(Dashboard));
