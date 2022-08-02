import { GET_PROFILE, LOGOUT } from 'src/redux/auth_types';
import { User } from 'src/types';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';

interface AuthState extends User {
  loading?: boolean; // loading state
}

interface IAuthAction {
  type: string,
  payload: User
}

const initialState = {
  name: '-',
  loading: true
};
const credential = storageService.get(keyStoragesCredential);
export const authReducer = (state: AuthState = { ...credential?.user || initialState }, action: IAuthAction) => {
  switch (action.type) {
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
