import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import withActionBar from '../../components/ActionBar/withActionBar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClicked: false,
        };
    }

    componentDidMount = () => {
        const { actionBar } = this.props;
        actionBar.setConfig({
            title: 'Dashboard',
            actionLeft: this.renderLeftMenu(),
        });
    }

    setClickMenu = () => {
        this.setState(state => ({
            menuClicked: !state.menuClicked,
        }));
    }

    renderLeftMenu = () => (
        <IconButton onClick={this.setClickMenu} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
    )

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
};

export default withActionBar(Dashboard);
