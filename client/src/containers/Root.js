import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from '../redux/configureStore'
import App from './App';

const store = configureStore();

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

