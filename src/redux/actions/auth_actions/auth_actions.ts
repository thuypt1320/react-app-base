import {
  GET_PROFILE,
  LOGIN,
  LOGIN_GOOGLE,
  LOGOUT, LOGOUT_GOOGLE
} from 'src/redux/types/auth_action_types';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
export const login = (payload) => {
  return ({
    type: LOGIN,
    payload
  });
};

export const loginGoogle = (payload) => {
  storageService.set(keyStoragesCredential, {
    user: {
      name: payload.profileObj.name,
      email: payload.profileObj.email,
      id: payload.profileObj.googleId
    },
    access_token: payload.accessToken
  }
  );
  return ({
    type: LOGIN_GOOGLE,
    payload: {
      loading: Boolean(payload),
      data: {
        name: payload.profileObj.name,
        email: payload.profileObj.email,
        id: payload.profileObj.googleId
      },
      type: 'google'
    }
  });
};

export const getProfile = (payload) => {
  return ({
    type: GET_PROFILE,
    payload
  });
};

export const logout = () => {
  return ({
    type: LOGOUT,
    payload: {}
  });
};

export const logoutGoogle = () => {
  storageService.remove(keyStoragesCredential);
  return ({
    type: LOGOUT_GOOGLE,
    payload: {}
  });
};
