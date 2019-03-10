import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import withAppShell from '../../components/AppShell/withAppShell';

const styled = withStyles(theme => ({
    drawer: {
        width: 240,
    },
}));

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        const { shell: { actionBar } } = this.props;
        actionBar.setConfig({ title: 'Dashboard' });
    }

    render() {
        const { children, location } = this.props;
        return (
            <div>
                {location.pathname}
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
    shell: PropTypes.instanceOf(Object),
    classes: PropTypes.instanceOf(Object),
    location: PropTypes.instanceOf(Object),
};

export default withAppShell(styled(Dashboard));
