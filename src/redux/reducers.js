import {combineReducers} from 'redux';
import {LOGGED_IN, LOGGED_OUT} from './actions'

function authorised(state = false, action) {
    switch (action.type) {
        case LOGGED_IN:
            return true;
        case LOGGED_OUT:
            return false;
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    authorised
});

export default combinedReducers;