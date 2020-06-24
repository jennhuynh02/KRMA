import {
  RECEIVE_ALL_USERS,
  DELETE_USER,
} from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users.data;
    case DELETE_USER:
      const newState = { ...state };
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
