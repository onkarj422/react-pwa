import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { title, children } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                {children}
            </div>
        );
    }
}

App.defaultProps = {
    children: null
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
};

export default App;
