import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import LoginComponent from './Login';
import LogoutComponent from './Logout';
import PrivateRoute from './PrivateRoute';
import HomeComponent from './Home'

const TestComponent = (props)=>(<div>This is admin page</div>);
const CorrectRouteAfterDispatch = ({location, ...rest})=>(<Redirect {...rest} to={location}/>);

class App extends Component {
    render() {
        const {authorised} = this.props;
        return (<Switch>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/logout' component={LogoutComponent} />
            <PrivateRoute path='/home' component={HomeComponent} />
            <Route path='/profile' render={()=><div>{authorised.code}</div>} />
            <PrivateRoute path='/admin' component={TestComponent} />
            {/*<Route exact path='/' render={()=>{*/}
                {/*return (authorised.authState ? (<Redirect to="/profile"/>): (<LoginComponent/>))*/}
            {/*}}/>*/}
        </Switch>)
    }

    com

}

function mapStateToProps(state){
    return {authorised: {...state.authorised}};
}

export default withRouter(connect(mapStateToProps)(App));
