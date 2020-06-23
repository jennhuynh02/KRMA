import { combineReducers } from 'redux';
import UsersReducer from './user_reducer';

const AdminReducer = combineReducers({
  users: UsersReducer,
});

export default AdminReducer;
