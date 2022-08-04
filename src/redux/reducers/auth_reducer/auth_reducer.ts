import {
  GET_PROFILE,
  LOGIN,
  LOGIN_GOOGLE,
  LOGOUT
} from 'src/redux/types/auth_action_types';
import { User } from 'src/types';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';

export interface AuthState {
  loading?: boolean; // loading state
  data?: User;
  type?: string;
}

export interface IAuthAction {
  type: string,
  payload?: User
}

export const credentialSt = storageService.get(keyStoragesCredential);
const initialState = {
  data: credentialSt?.user,
  loading: Boolean(!credentialSt) || true
};

export const authReducer = (state: AuthState = initialState, action: IAuthAction) => {
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
