import { GET_PROFILE, LOGIN, LOGOUT } from 'src/redux/types/auth_action_types';
import { User } from 'src/types';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';

export interface AuthState {
  loading?: boolean; // loading state
  data?: User;
}

export interface IAuthAction {
  type: string,
  payload?: User
}

const initialState = {
  data: {},
  loading: true
};

export const authReducer = (state: AuthState = initialState, action: IAuthAction) => {
  switch (action.type) {
    case LOGIN: {
      return ({
        ...state,
        data: action.payload
      });
    }
    case GET_PROFILE: {
      return ({
        ...state,
        data: action.payload
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
