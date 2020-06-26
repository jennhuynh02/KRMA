import {
  REMOVE_TREASURE,
  RECEIVE_TREASURE,
  RECEIVE_TREASURES,
  RECEIVE_USER_TREASURES,
} from '../actions/treasure_actions';

const defaultState = { admin: {}, user: {}, new: {} };

const treasureReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_TREASURE:
      newState.new = action.treasure.data;
      return newState;
    case RECEIVE_TREASURES:
      newState.admin = action.treasures.data;
      return newState;
    case RECEIVE_USER_TREASURES:
      newState.user = action.treasures.data;
      return newState;
    case REMOVE_TREASURE:
      delete newState.admin[action.treasureId];
      return newState;
    default:
      return state;
  }
};

export default treasureReducer;
