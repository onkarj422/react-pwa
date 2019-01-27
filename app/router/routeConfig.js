import React from 'react';
import Attendance from '../modules/Attendance'
import Dashboard from '../modules/Dashboard';

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
        title: 'Home',
    },
    {
        path: '/attendance',
        component: Attendance,
        routes: [
            {
                path: '/attendance/take',
                component: TakeAttendance,
                title: 'Start Attendance',
            },
            {
                path: '/attendance/view',
                component: ViewAttendance,
                title: 'View Attendance',
            },
        ],
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
        title: 'About',
    },
];

export default routes;
