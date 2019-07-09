import React from 'react';
import PropTypes from 'prop-types';


class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        const { match: { params: { token } }, store: { setItem } } = this.props;
        if (token) {
            setItem('token', token, 'LOCAL');
        }
    }

    render() {
        const { store: { local: { token } } } = this.props;
        return (
            <div>
                <If condition={token}>
                    <span>Login Successful</span>
                    <Else />
                    <span>Login failed</span>
                </If>
            </div>
        );
    }
}

Authentication.defaultProps = {
    children: <></>
}

Authentication.propTypes = {
    children: PropTypes.element,
    classes: PropTypes.instanceOf(Object),
    location: PropTypes.instanceOf(Object),
    match: PropTypes.instanceOf(Object),
    store: PropTypes.instanceOf(Object),
};

export default Authentication;
