import {
  REMOVE_TREASURE,
  RECEIVE_TREASURE,
  RECEIVE_TREASURES,
  RECEIVE_USER_TREASURES,
  RECEIVE_NEW_TREASURE,
} from "../actions/treasure_actions"

const _defaultState = { admin: {},  user: {}, new: {} };

const treasureReducer = ( state = _defaultState, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_TREASURE:
            return action.treasure.data; // may or may not need an extension
        case RECEIVE_TREASURES: // for admin
            newState.admin = action.treasures.data; // may or may not need an extension
            return newState;
        case RECEIVE_USER_TREASURES:
            newState.user = action.treasures.data; // may or may not need an extension
            return newState;
        case RECEIVE_NEW_TREASURE:
            newState.new = action.treasure.data; // may or may not need an extension
            return newState;
        case REMOVE_TREASURE:
            delete newState.treasures[action.treasureId];
            return newState
        default:
            return state;
    }
}

export default treasureReducer;
