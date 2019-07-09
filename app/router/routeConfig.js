import React from 'react';
import Attendance from '../modules/Attendance';
import attendanceRoutes from '../modules/Attendance/routes';
import Dashboard from '../modules/Dashboard';
import Authentication from '../modules/Authentication';

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
        routes: attendanceRoutes,
        title: 'Attendance',
    },
    {
        path: '/login',
        component: Login,
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
    {
        path: '/auth/:token?',
        component: Authentication,
    },
];

export default routes;
