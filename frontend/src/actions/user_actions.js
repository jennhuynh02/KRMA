import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const DELETE_USER = 'DELETE_USER';

// dispatched when admin requests all users
export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});

export const removeUser = (userId) => ({
  type: DELETE_USER,
  userId,
})

// dispatched when admin requests all users
export const fetchAllUsers = () => (dispatch) => (
  UserAPIUtil.getUsers()
		.then(users => dispatch(receiveAllUsers(users)))
		.catch(err => console.log(err))
);

export const deleteUser = (userId) => (dispatch) => {
  const userIdsaved = userId;
  UserAPIUtil.deleteUser(userId)
    .then(() => dispatch(removeUser(userIdsaved)))
		.catch(err => console.log(err))
}
