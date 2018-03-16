import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

const LoginComponent = (props) => (<div>test</div>);

class App extends Component {
    render() {
        return <LoginComponent {...this.props}/>
        // return (
        //   <div className="App">
        //     <header className="App-header">
        //       <img src={logo} className="App-logo" alt="logo" />
        //       <h1 className="App-title">Welcome to React</h1>
        //     </header>
        //     <p className="App-intro">
        //       To get started, edit <code>src/App.js</code> and save to reload.
        //     </p>
        //   </div>
        // );
    }
}

function mapStateToProps(state){
    return {...state};
}

export default connect(mapStateToProps)(App);
