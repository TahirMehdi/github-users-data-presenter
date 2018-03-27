import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import LoginComponent from './Login';
import LogoutComponent from './Logout';
import PrivateRoute from './PrivateRoute';
import HomeComponent from './Home'

const TestComponent = (props) => (<div>This is admin page</div>);
const CorrectRouteAfterDispatch = ({location, ...rest}) => (<Redirect {...rest} to={location}/>);

const clientData = {
    clientId: 'a44ae53f1999e22b07ef',
    clientSecret: 'f5ecbb8355196fab39751f7c83a7a5c8f4d619ac',
    redirectUri: 'http://localhost:3000/logged'
};

let code;

class App extends Component {
    render() {
        const {authorised} = this.props;
        return (<Switch>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/logout' component={LogoutComponent} />
            <PrivateRoute path='/home' component={HomeComponent} />
            <Route path='/profile' render={()=><div>{authorised}</div>} />
            <PrivateRoute path='/admin' component={TestComponent} />
            {/*<Route exact path='/' render={()=>{*/}
                {/*return (authorised.authState ? (<Redirect to="/profile"/>): (<LoginComponent/>))*/}
            {/*}}/>*/}
        </Switch>)
        // return <div>
        //     <button onClick={() => {
        //         fetch('https://github.com/login/oauth/authorize?client_id=a44ae53f1999e22b07ef', {
        //             mode: 'no-cors',
        //             method: 'GET',
        //             // headers: {
        //             //     'Accept': 'application/json',
        //             //     'Content-Type': 'application/json'
        //             // }
        //         })
        //             .then(response => console.warn(response))
        //             .then(response => (console.log(response), code = response.code))
        //     }}> getcode
        //     </button>
        //     <button>gettoken</button>
        // </div>
    }


}

function mapStateToProps(state) {
    return {authorised: {...state.authorised}};
}

export default withRouter(connect(mapStateToProps)(App));
