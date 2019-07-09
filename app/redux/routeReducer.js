import { fromJS } from 'immutable';

const LOCATION_CHANGE = 'LOCATION_CHANGE';

const routeInitialState = fromJS({
    locationBeforeTransitions: null,
});

const routeReducer = (state = routeInitialState, action) => {
    switch (action.type) {
    case LOCATION_CHANGE:
        return state.merge({
            locationBeforeTransitions: action.payload,
        });
    default:
        break;
    }
    return null;
}

export default routeReducer;