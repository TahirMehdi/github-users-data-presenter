import React, {Component} from 'react'
import {connect} from 'react-redux';
import GitHubLogin from 'react-github-login';
import {LOGIN} from '../redux/actions';
import {Redirect} from 'react-router-dom';
import {GitHubLoginWithFetch} from '../oauth/Oauth';

const onFailure = response => console.error(response);
const clientData = {
    clientId:'a44ae53f1999e22b07ef',
    clientSecret:'f5ecbb8355196fab39751f7c83a7a5c8f4d619ac',
    redirectUri: 'http://localhost:3000/logged'
};

class LoginComponent extends Component {
    render() {
        const {dispatch} = this.props;
        const {authorised} = this.props;
        const {from} = this.props.location.state || {from: {pathname: '/home'}};
        return authorised.authState
            ? <Redirect to={from}/>
            : <GitHubLoginWithFetch
                onSuccess={response => (dispatch(LOGIN({userdata: response})))}
                           onFailure={onFailure}
                           {...clientData}
            />;
    }
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(LoginComponent);