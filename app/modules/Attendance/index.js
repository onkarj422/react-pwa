import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withActionBar from '../../components/ActionBar/withActionBar';

class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        const { actionBar } = this.props;
        actionBar.setConfig({
            title: 'Attendance'
        });
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
    actionBar: PropTypes.instanceOf(Object),
}

export default withActionBar(Attendance);
