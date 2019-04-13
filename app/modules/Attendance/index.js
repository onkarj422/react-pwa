import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withAppShell from '../../components/AppShell/withAppShell';

class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                These are attendance child routes
                <Link to="/attendance/view"><button type="button">Click Here</button></Link>
                <Link to="/attendance/take"><button type="button">Click Here</button></Link>
                <div style={{
                    background: 'skyblue',
                    widht: '500px',
                    height: '900px',
                    padding: '20px',
                }}>
                    {children}
                </div>
            </div>
        );
    }
}

Attendance.defaultProps = {
    children: null,
}

Attendance.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    shell: PropTypes.instanceOf(Object),
}

export default withAppShell(Attendance, { title: 'Attendance' });
