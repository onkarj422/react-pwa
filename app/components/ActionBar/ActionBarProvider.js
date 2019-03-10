import React from 'react';
import PropTypes from 'prop-types';
import ActionBar from '.';

export const ActionBarContext = React.createContext();

class ActionBarProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Default',
            actionLeft: null,
            actionsRight: [],
            className: '',
        };
    }

    setConfig = (state) => {
        this.setState(state);
    }

    render() {
        const { children } = this.props;
        return (
            <ActionBarContext.Provider value={{
                setConfig: this.setConfig
            }}>
                <ActionBar {...this.state} />
                {children}
            </ActionBarContext.Provider>
        );
    }
}

ActionBarProvider.propTypes = {
    children: PropTypes.node,
};

export default ActionBarProvider;
