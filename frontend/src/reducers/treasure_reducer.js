import { RECEIVE_TREASURE, RECEIVE_TREASURES, RECEIVE_USER_TREASURES, RECEIVE_NEW_TREASURE} from "../actions/treasure_actions"

const treasureReducer = (state={all: {}, user={}, new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_TREASURE:
            return action.treasure;
        case RECEIVE_TREASURES:
            newState.all = action.treasure;
            return newState;
        case RECEIVE_USER_TREASURES:
            
        case RECEIVE_NEW_TREASURE:
            newState.new = actions.treasure.treasureUrl;
            return newState;
        default:
            return state;
    }
   
    
}

export default treasureReducer;