import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import treasure from './treasure_reducer';
import admin from './admin_reducer';

const rootReducer = combineReducers({
  session,
  ui,
  errors,
  treasure,
  admin,
});

export default rootReducer;
