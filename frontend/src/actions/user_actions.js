import { getUsers }  from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

// dispatched when admin requests all users
export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});

export const fetchAllUsers = () => (dispatch) => (
  getUsers()
    // .then(users => console.log(users))
		.then(users => dispatch(receiveAllUsers(users)))
		.catch(err => console.log(err))
);
