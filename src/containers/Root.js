import React, {Component} from 'react';
import {createStore} from 'redux';
import combinedReducers from '../redux/reducers'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

const store = createStore(combinedReducers);
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
    }
}

