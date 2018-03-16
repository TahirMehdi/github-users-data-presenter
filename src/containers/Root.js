import React, {Component} from 'react';
import {createStore} from 'redux';
import combinedReducers from '../redux/reducers'
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import App from './App';
import LoginComponent from './login';

const store = createStore(combinedReducers);
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={LoginComponent}/>
                        <Route path='/logged' render={()=><div>logged</div>} />
                        <Route path='/home' component={App} />
                        <Route path='/profile' render={()=><div>profile</div>} />
                        <Route path='/admin' render={()=><div>admin</div>} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

