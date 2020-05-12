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
    loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const Admin = ({ component: Component, path, loggedIn, user, ...rest }) => (
  <Route {...rest} render={(props) => (
    (loggedIn && (user.email === 'admin@treasurebox.com')) ? <Component {...props} /> : <Redirect to="/treasureisland" />)}
  />
);



const mapState = (state) => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
})

export const AuthRoute = withRouter(connect(mapState)(Auth));
export const ProtectedRoute = withRouter(connect(mapState)(Protected));
export const AdminRoute = withRouter(connect(mapState)(Admin));