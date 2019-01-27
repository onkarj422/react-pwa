import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderComponent = ({ match, ...rest }, { component: Component, routes, ...route }) => (
        <If condition={match}>
            <Component {...rest} {...route} >
                <If condition={routes && routes.length > 0}>
                    {routes.map(this.renderRoute)}
                </If>
            </Component>
        </If>
    )

    renderRoute = (route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
            {(props) => this.renderComponent(props, route)}
        </Route>
    )

    render() {
        const { routes } = this.props;
        return routes.map(this.renderRoute);
    }
}

Router.propTypes = {
    routes: PropTypes.instanceOf(Array).isRequired,
}

export default Router;
