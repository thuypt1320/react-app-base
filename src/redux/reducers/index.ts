import { combineReducers } from 'redux';
import { commonReducer } from 'src/redux/reducers/common_reducer/common_reducer';
import { authReducer } from 'src/redux/reducers/auth_reducer';
import { userReducer } from 'src/redux/reducers/user_reducers';
export const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  common: commonReducer
});
