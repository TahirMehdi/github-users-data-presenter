import {combineReducers} from 'redux';
import {LOGGED_IN, LOGGED_OUT} from './actions'

function authorised(state = {
    authState: false,
}, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {...state, authState: true, ...action.payload};
        case LOGGED_OUT:
            return {authState: false};
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    authorised
});

export default combinedReducers;