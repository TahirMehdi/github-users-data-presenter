import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../redux/actions';
import {Redirect} from 'react-router-dom';

class LogoutComponent extends Component{
    render(){
        const {dispatch} = this.props;
        const {authorised} = this.props;
        const {from} = this.props.location.state;
        return authorised.authState
            ? dispatch(logout())
            : <Redirect to={from}/>
    }

}

function mapStateToProps(state){
    return {...state}
}
export default connect(mapStateToProps)(LogoutComponent)