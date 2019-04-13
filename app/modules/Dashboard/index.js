import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import withAppShell from '../../components/AppShell/withAppShell';

const styled = withStyles({
    drawer: {
        width: 240,
    },
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
    shell: PropTypes.instanceOf(Object),
    classes: PropTypes.instanceOf(Object),
    location: PropTypes.instanceOf(Object),
};

export default withAppShell(styled(Dashboard), { title: 'Dashboard' });
