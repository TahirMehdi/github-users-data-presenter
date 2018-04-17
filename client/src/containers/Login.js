import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Loginform from '../presenters/Loginform';

class LoginComponent extends Component {
    render(){
        const {authorised} = this.props;
        const {from} = this.props.location.state || {from: {pathname: '/home'}};
        return authorised.authState
            ? <Redirect to={from}/>
            : <Loginform/>;
    }
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(mapStateToProps)(LoginComponent);