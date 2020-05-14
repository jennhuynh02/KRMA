import {
  RECEIVE_ALL_USERS,
} from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users.data;
    // case DELETE_USER:
    //   return 
    default:
      return state;
  }
}

export default UsersReducer;
