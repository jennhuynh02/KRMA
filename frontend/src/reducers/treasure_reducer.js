import {
  REMOVE_TREASURE,
  RECEIVE_TREASURE,
  RECEIVE_TREASURES,
  RECEIVE_USER_TREASURES,
} from "../actions/treasure_actions";

const _defaultState = { admin: {},  user: {}, new: {} };

const treasureReducer = ( state = _defaultState, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_TREASURE:
            debugger
            newState.new = action.treasure.data;
            return newState; 
        case RECEIVE_TREASURES: // for admin
            newState.admin = action.treasures.data; 
            return newState;
        case RECEIVE_USER_TREASURES:
            newState.user = action.treasures.data;
            return newState;
        case REMOVE_TREASURE:
            delete newState.admin[action.treasureId];
            return newState
        default:
            return state;
    }
}

export default treasureReducer;
