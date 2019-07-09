import React, { Component } from 'react'
import { compose } from 'redux';
import Authentication from './Authentication';
import { withStorage } from '../../storage/index';

class Connect extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Authentication {...this.props} />;
    }
}

export default compose(
    withStorage
)(Connect);
