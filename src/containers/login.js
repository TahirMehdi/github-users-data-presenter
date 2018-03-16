import React, {Component} from 'react'
import {connect} from 'react-redux';
import GitHubLogin from 'react-github-login';
const onSuccess = response => console.log(response);
const onFailure = response => console.log(response);

class LoginComponent extends Component{
    render(){
        return <GitHubLogin clientId="a44ae53f1999e22b07ef"
                            redirectUri="http://localhost:3000/logged"
                            onSuccess={onSuccess}
                         onFailure={onFailure}/>

    }
}

function mapStateToProps(state){
    return {...state};
}

export default connect(mapStateToProps)(LoginComponent);