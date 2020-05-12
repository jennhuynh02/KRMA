import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path ={path} exact={exact} render={(props) => (
    !loggedIn? <Component {...props} /> : <Redirect to="/treasureisland" />)} 
  />
);

const Protected = ({ component: Component, path, loggedIn, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn ? <Component {...props} /> : <Redirect to="/mainpage" />)}
  />
);

const mapState = (state) => ({
  loggedIn: state.session.isAuthenticated,
})

export const AuthRoute = withRouter(connect(mapState)(Auth));
export const ProtectedRoute = withRouter(connect(mapState)(Protected));