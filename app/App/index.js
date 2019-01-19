import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true,
        };
    }

    handleChange = () => {
        this.setState(state => ({ value: !state.value }));
    };

    render() {
        const { value } = this.state;
        const { title } = this.props;
        return (
            <div>
                <If condition={value}>{title}</If>
                <button type="button" onClick={this.handleChange}>
                    Change
                </button>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
};

export default App;
