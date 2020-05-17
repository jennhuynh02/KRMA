import jwt_decode from 'jwt-decode';
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

// dispatched when user signs in
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

// redirect to login page after signup
export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN,
});

// to dispatch errors
export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const updateCurrentUser = (user) => ({
  type: UPDATE_CURRENT_USER,
  user,
});

// once user logs in, we set session token & dispatch current user
export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token); // decode token so we have access to user data
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((errors) => dispatch(receiveErrors(errors.response.data)))
);

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token); // decode token so we have access to user data
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((errors) => dispatch(receiveErrors(errors.response.data)))
);

export const getCurrentUser = (userId) => (dispatch) => {
  APIUtil.currentUser(userId)
    .then((user) => dispatch(receiveCurrentUser(user.data)))
    .catch((err) => console.log(err));
};
