import { authReducer, IAuthAction } from 'src/redux/reducers/auth_reducer';
import {
  applyMiddleware,
  combineReducers, Dispatch,
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
import {
  connect, ConnectedProps
} from 'react-redux';
import { loginGoogle, logoutGoogle } from 'src/redux/actions/auth_actions';
import { create, update } from 'src/redux/actions/user_actions';
import thunk from 'redux-thunk';
import { useEffect, useState } from 'react';

const middleware = applyMiddleware(userMW, authMW, thunk);
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
});
export const stores = createStore(reducers, middleware);

export const authSelector = () => stores.getState().auth;
export const userSelector = () => stores.getState().user;
export const allSelector = () => stores.getState();

export const mapAuthStateToProps = {
  data: stores.getState().auth
};

export const mapUserStateToProps = {
  data: stores.getState().user
};
export const mapStateToProps = {
  data: stores.getState()
};
export type MapAuthStateToProps = typeof mapAuthStateToProps;
export type MapUserStateToProps = typeof mapUserStateToProps;
export type MapStateToProps = typeof mapStateToProps;

export const mapAuthDispatchToProps = {
  login: (payload?: {
    username?: string,
    password?: string
  }) => {
    stores.dispatch({
      type: LOGIN,
      payload
    });
  },
  loginGoogle: (payload) => stores.dispatch(loginGoogle(payload)),
  getProfile: () => stores.dispatch({ type: GET_PROFILE }),
  logout: () => {
    stores.dispatch({ type: LOGOUT });
  },
  logoutGoogle: () => stores.dispatch(logoutGoogle())
};

export const mapUserDispatchToProps = {
  getList: () => stores.dispatch({ type: GET_LIST }),
  getDetail: (id: string) => stores.dispatch({
    type: GET_DETAIL,
    payload: { id }
  }),
  update: (formValue) => stores.dispatch(update(formValue)),
  create: (formValue) => stores.dispatch(create(formValue)),
  delete: () => stores.dispatch({ type: DELETE })
};

export const mapDispatchToProps = {
  ...mapAuthDispatchToProps,
  ...mapUserDispatchToProps
};

export type MapAuthDispatchToProps = typeof mapAuthDispatchToProps;
export type MapUserDispatchToProps = typeof mapUserDispatchToProps;
export type MapDispatchToProps = typeof mapDispatchToProps;

export const authConnect = (component) => connect(() => mapAuthStateToProps, () => mapAuthDispatchToProps)(component);
export const userConnect = (component) => connect(() => mapUserStateToProps, () => mapUserDispatchToProps)(component);
export const allConnect = (component) => connect(() => mapStateToProps, () => mapDispatchToProps)(component);
export type AuthConnectProps = MapAuthStateToProps & MapAuthDispatchToProps
export type UserConnectProps = MapUserStateToProps & MapUserDispatchToProps;
export type AllConnectProps = AuthConnectProps & UserConnectProps;

export const subscribe = (listener) => {
  stores.subscribe(listener);
};
