import React from 'react'
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const PrivateRoute = ({component: Component, authorised, ...rest}) => {
    return <Route {...rest} render={(props) =>
        (authorised.authState
            ? (<Component {...props}/>)
            : (<Redirect to={{
                pathname:'/login',
                state: {from: props.location}
            }}/>))
    }/>;
};

function mapStateToProps(state) {
    return {authorised: {...state.authorised}};
}
export default withRouter(connect(mapStateToProps)(PrivateRoute));