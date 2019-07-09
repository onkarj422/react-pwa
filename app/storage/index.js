import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLocalStore } from './redux/selectors';
import { setItem, queryLocalStore } from './redux/actions';

// eslint-disable-next-line import/prefer-default-export
export const withStorage = WrappedComponent => {

    class Connected extends Component {

        componentDidMount = () => {
            const { store: { queryLocal } } = this.props;
            queryLocal();
        }

        render() {
            const { store: s, localStore, ...rest } = this.props;
            const store = { ...s, local: localStore }
            return <WrappedComponent store={store} {...rest} />;
        }

    }

    Connected.propTypes = {
        queryLocal: PropTypes.func,
        localStore: PropTypes.instanceOf(Object),
        store: PropTypes.instanceOf(Object),
    }

    const mapStateToProps = createStructuredSelector({
        localStore: selectLocalStore(),
    });

    const mapDispatchToProps = dispatch => ({
        store: {
            setItem(key, value, storageType, expiry) {
                dispatch(setItem(key, value, storageType, expiry));
            },
            queryLocal() {
                dispatch(queryLocalStore());
            },
        }
    });

    return connect(mapStateToProps, mapDispatchToProps)(Connected);
}
