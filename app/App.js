import React from 'react';
import PropTypes from 'prop-types';
import ActionBarProvider from './components/ActionBar/ActionBarProvider';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <ActionBarProvider>
                {children}
            </ActionBarProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};

export default App;
