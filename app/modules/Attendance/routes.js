import React from 'react';

const ViewAttendance = () => <div>This is to view attendance</div>;
const TakeAttendance = () => <div>Start Attendance!</div>;

export default [
    {
        path: '/attendance/take',
        component: TakeAttendance,
    },
    {
        path: '/attendance/view',
        component: ViewAttendance,
    },
];
