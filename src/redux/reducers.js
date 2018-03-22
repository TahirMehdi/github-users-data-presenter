import {combineReducers} from 'redux';
import {LOGGED_IN, LOGGED_OUT} from './actions'

function authorised(state = {
    authState: false,
    authDetails: null
}, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {...state, authDetails: action.details, authState: true};
        case LOGGED_OUT:
            return {...state, authDetails: null, authState: false};
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    authorised
});

export default combinedReducers;