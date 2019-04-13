/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import withAppShellContext from './withAppShellContext';

const withAppShell = (Component, config) => componentProps => {
    class ComponentWithAppShell extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        componentDidMount = () => {
            const { shell: { actionBar } } = this.props;
            actionBar.setConfig({ ...config });
        }

        render() {
            const { children, shell } = this.props;
            return React.cloneElement(children, { shell });
        }
    }

    const AppShell = withAppShellContext(ComponentWithAppShell);

    return (
        <AppShell>
            <Component {...componentProps} />
        </AppShell>
    )
}

export default withAppShell;
