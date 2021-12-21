import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component,loggedIn, ...rest }) => (
   
    <Route {...rest} render={props => ( loggedIn ? <Component {...props} />  : <Redirect to="/join" />)}     />           
)


export default PrivateRoute;