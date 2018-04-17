import React, {Component} from 'react'
import {connect} from 'react-redux';
import {LOGIN, login} from '../redux/actions';

class Loginform extends Component {
    constructor() {
        super();
        this.state = {username: '', password: ''};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange= this.onPasswordChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    onUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit(event){
        const { dispatch } = this.props;
        const { username, password } = this.state;
        dispatch(login({username, password }));
        event.preventDefault();
    }
    render() {
        const { username, password } = this.state;
        return <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={'Enter username'}
                   value={username} onChange={this.onUsernameChange}/>
            <input type="text" placeholder={'Enter password'}
                   value={password} onChange={this.onPasswordChange}/>
            <input type="submit" value="Submit" />
        </form>;
    }
}

function mapStateToProps(state){
    return {...state};
}

export default connect(mapStateToProps)(Loginform);