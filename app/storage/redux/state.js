import { fromJS } from 'immutable';
import { getStore } from '../utils';

export default () => ({
    localStore: fromJS(getStore('LOCAL')),
    loadingLocalStore: false,
    sessionStore: fromJS(getStore('SESSION')),
    loadingSessionStore: false,
});
