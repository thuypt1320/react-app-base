import { authReducer } from 'src/redux/reducers/auth_reducer';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from 'redux';
import { authMW, userMW } from 'src/redux/middleware';
import { userReducer } from 'src/redux/reducers/user_reducers/user_reducers';

const middleware = applyMiddleware(userMW, authMW);
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
});
export const stores = createStore(reducers, middleware);

export const authSelector = () => stores.getState().auth;
export const userSelector = () => stores.getState().user;
