import React, {Component} from 'react'
import {connect} from 'react-redux';

class HomeComponent extends Component{
    render(){
        console.warn(this.props)
        return <div>
            <h1>Welcome to the home screen.</h1>
            <input type="asd"/>
        </div>
    }
}

function mapStateToProps(state) {
    return {...state}
}
export default connect(mapStateToProps)(HomeComponent)