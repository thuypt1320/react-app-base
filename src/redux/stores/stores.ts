import { authReducer } from 'src/redux/auth_reducer';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from 'redux';
import {
  loginMW,
  logoutMW,
  getProfileMW
} from 'src/redux/auth_middleware/auth_middleware';

const middleware = applyMiddleware(logoutMW, getProfileMW, loginMW);
const reducers = combineReducers({
  auth: authReducer
});
export const stores = createStore(reducers, middleware);

export const authSelector = () => stores.getState().auth;

export const dispatch = stores.dispatch;
