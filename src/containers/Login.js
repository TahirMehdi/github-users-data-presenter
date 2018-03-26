import React, {Component} from 'react'
import {connect} from 'react-redux';
import GitHubLogin from 'react-github-login';
import {LOGIN} from '../redux/actions';
import {Redirect} from 'react-router-dom';

const onFailure = response => console.error(response);

class LoginComponent extends Component {
    render() {
        const {dispatch} = this.props;
        const {authorised} = this.props;
        const {from} = this.props.location.state;
        return authorised.authState
            ? <Redirect to={from}/>
            : <GitHubLogin clientId="a44ae53f1999e22b07ef"
                            redirectUri="http://localhost:3000/logged"
                            onSuccess={response => (dispatch(LOGIN({code:response.code, userdata:response})))}
                            onFailure={onFailure}/>;
    }
}

function mapStateToProps(state) {
    return {...state};
}
export default connect(mapStateToProps)(LoginComponent);