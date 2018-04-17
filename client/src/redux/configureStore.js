import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducers from '../redux/reducers';

const configureStore = preloadedState =>
    createStore(
        combinedReducers,
        preloadedState,
        applyMiddleware(thunk, logger)
    );
export default configureStore;
