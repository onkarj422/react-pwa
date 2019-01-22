import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dashboard = () => <div>This is dashboard component</div>;
const Attendance = (props) => {
    const { children } = props;
    return (
        <div>
            These are attendance child routes
            <Link to="/attendance/view"><button type="button">Click Here</button></Link>
            <Link to="/attendance/take"><button type="button">Click Here</button></Link>
            {children}
        </div>
    )
};
Attendance.propTypes = {
    children: PropTypes.element.isRequired
}
const ViewAttendance = () => <div>This is to view attendance</div>;
const TakeAttendance = () => <div>Start Attendance!</div>;
const About = () => <div>This is about us</div>;
const Login = () => <div>This is login component</div>;
const Register = () => <div>This is register component</div>;

const routes = [
    {
        path: ['/', '/dashboard'],
        component: Dashboard,
        exact: true,
    },
    {
        path: '/attendance',
        component: Attendance,
        routes: [
            {
                path: '/attendance/take',
                component: TakeAttendance,
            },
            {
                path: '/attendance/view',
                component: ViewAttendance,
            },
        ],
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    },
    {
        path: '/about',
        component: About,
        exact: true,
    },
];

export default routes;
