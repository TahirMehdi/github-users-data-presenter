import React, {Component} from 'react'
import GitHubLogin from 'react-github-login';
import {safeJsonStringify} from './utils';

const getAccessToken = ({onSuccess, onFailure,
                            clientId: client_id,
                            clientSecret: client_secret,
                            redirectUri: redirect_uri,
                            ...props}) => fetch(
    'https://github.com/login/oauth/access_token', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: safeJsonStringify({
            client_id,
            client_secret,
            redirect_uri,
            ...props
        })
    })
    .then(response=>response.json())
    .then(onSuccess)
    .catch(onFailure);

export class GitHubLoginWithFetch extends Component {
    render(){
        const {clientId, redirectUri, onFailure} = this.props;
        console.warn('this.props',this.props);
        return (<GitHubLogin clientId={clientId}
                             redirectUri={redirectUri}
                             onSuccess={(response) => getAccessToken({code:response.code, ...this.props})}
                             onFailure={onFailure}/>);
    }
}