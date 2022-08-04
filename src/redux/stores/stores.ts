import { authReducer } from 'src/redux/reducers/auth_reducer';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from 'redux';
import { authMW, userMW } from 'src/redux/middleware';
import {
  userReducer
} from 'src/redux/reducers/user_reducers/user_reducers';
import {
  GET_PROFILE,
  LOGIN,
  LOGOUT
} from 'src/redux/types/auth_action_types';
import {
  DELETE,
  GET_DETAIL,
  GET_LIST, UPDATE
} from 'src/redux/types/user_action_types/user_action_types';
import { connect } from 'react-redux';
import { loginGoogle, logoutGoogle } from 'src/redux/actions/auth_actions';
import { create } from 'src/redux/actions/user_actions';

const middleware = applyMiddleware(userMW, authMW);
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
});
export const stores = createStore(reducers, middleware);

export const authSelector = () => stores.getState().auth;
export const userSelector = () => stores.getState().user;

export const mapAuthStateToProps = () => {
  return {
    data: stores.getState().auth
  };
};
export const mapUserStateToProps = () => {
  return {
    data: stores.getState().user
  };
};
export const mapStateToProps = () => {
  return {
    ...mapAuthStateToProps(),
    ...mapUserStateToProps()
  };
};

export const mapAuthDispatchToProps = () => {
  return {
    login: () => stores.dispatch({ type: LOGIN }),
    loginGoogle: (payload) => stores.dispatch(loginGoogle(payload)),
    getProfile: () => stores.dispatch({ type: GET_PROFILE }),
    logout: () => stores.dispatch({ type: LOGOUT }),
    logoutGoogle: () => stores.dispatch(logoutGoogle())
  };
};

export const mapUserDispatchToProps = () => {
  return {
    getList: () => stores.dispatch({ type: GET_LIST }),
    getDetail: (id: string) => stores.dispatch({
      type: GET_DETAIL,
      payload: { id }
    }),
    update: () => stores.dispatch({ type: UPDATE }),
    create: (formValue) => stores.dispatch(create(formValue)),
    delete: () => stores.dispatch({ type: DELETE })
  };
};

export const mapDispatchToProps = () => {
  return {
    ...mapAuthDispatchToProps(),
    ...mapUserDispatchToProps()
  };
};

export const authConnect = (component) => connect(mapAuthStateToProps, mapAuthDispatchToProps)(component);
export const userConnect = (component) => connect(mapUserStateToProps, mapUserDispatchToProps)(component);
export const allConnect = (component) => connect(mapStateToProps, mapDispatchToProps)(component);

export const subscribe = (listener) => {
  stores.subscribe(listener);
};
