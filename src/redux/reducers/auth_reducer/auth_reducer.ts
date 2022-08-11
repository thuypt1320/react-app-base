import {
  GET_PROFILE,
  LOGIN,
  LOGIN_GOOGLE,
  LOGOUT
} from 'src/redux/types/auth_action_types';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
import { ICredential } from 'types/credential';

export interface ILoginPayload {
  username?: string,
  password?: string,
  type?: string
}

export interface IAuthAction {
  type: string,
  payload?: ILoginPayload
}

export const credential = storageService.get(keyStoragesCredential);
const initialState = credential || {};

export const authReducer = (state: ICredential = initialState, action: IAuthAction) => {
  switch (action.type) {
    case LOGIN: {
      return ({
        ...state,
        ...action.payload
      });
    }
    case LOGIN_GOOGLE: {
      return ({
        ...state,
        ...action.payload
      });
    }
    case GET_PROFILE: {
      return ({
        ...state,
        ...action.payload
      });
    }
    case LOGOUT: {
      return ({});
    }
    default: {
      return state;
    }
  }
};
