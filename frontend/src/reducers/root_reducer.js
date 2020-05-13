import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import treasure from './treasure_reducer';

const rootReducer = combineReducers({
  session,
  ui,
  errors,
  treasure,
});

export default rootReducer;