import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';
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

    saveLocation = () => {

    }

    render() {
        const { children, location } = this.props;
        const authUrl = 'http://localhost:8080/api/auth/google';
        return (
            <div>
                {location.pathname}
                <Button onClick={this.saveLocation} href={authUrl} color="primary" variant="flat" size="medium">
                    Google Sign-In
                </Button>
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
