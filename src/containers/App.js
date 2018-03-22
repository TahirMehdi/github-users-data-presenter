import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import LoginComponent from './login';

class App extends Component {
    render() {
        const {authorised} = this.props;
        return (<Switch>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/logged' render={()=><div>logged</div>} />
            <Route path='/home' render={()=><div>home</div>} />
            <Route path='/profile' render={()=><div>{authorised.authDetails}</div>} />
            <Route path='/admin' render={()=><div>admin</div>} />
            <Route exact path='/' render={()=>{
                return (authorised.authState ? (<Redirect to="/profile"/>): (<LoginComponent/>))
            }}/>
        </Switch>)
    }
}

function mapStateToProps(state){
    return {authorised: {...state.authorised}};
}

export default withRouter(connect(mapStateToProps)(App));
