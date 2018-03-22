import React, {Component} from 'react'
import {connect} from 'react-redux';
import GitHubLogin from 'react-github-login';
import {LOGIN} from '../redux/actions';

const onFailure = response => console.error(response);
class LoginComponent extends Component{
    render(){
        const {dispatch} = this.props;
        return <GitHubLogin clientId="a44ae53f1999e22b07ef"
                            redirectUri="http://localhost:3000/logged"
                            onSuccess={response=>(dispatch(LOGIN(response.code)))}
                         onFailure={onFailure}/>

    }
}

function mapStateToProps(state){
    return {...state};
}

export default connect(mapStateToProps)(LoginComponent);