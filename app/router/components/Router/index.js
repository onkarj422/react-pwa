import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderComponent = (props, { component: Component, routes, ...route }) => {
        const { match } = props;
        return (
            <If condition={match}>
                <Component {...props} {...route} >
                    <If condition={routes && routes.length > 0}>
                        {routes.map(this.renderRoute)}
                    </If>
                </Component>
            </If>
        );
    }

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
