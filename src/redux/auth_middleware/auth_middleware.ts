import { GET_PROFILE, LOGIN, LOGOUT } from 'src/redux/auth_types';
import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';

export const loginMW = store => next => async action => {
  if (action.type === LOGIN) {
    const res = await authRepository.login();
    storageService.set(keyStoragesCredential, res.data);
    return next({
      type: LOGIN,
      payload: {
        loading: Boolean(!res.data),
        ...res.data
      }
    });
  }
  return next(action);
};

export const getProfileMW = store => next => async action => {
  if (action.type === GET_PROFILE) {
    const res = await authRepository.getProfile();
    return next({
      type: GET_PROFILE,
      payload: {
        loading: Boolean(!res.data),
        ...res.data
      }
    });
  }

  return next(action);
};

export const logoutMW = store => next => async action => {
  if (action.type === LOGOUT) {
    const res = await authRepository.logout();
    storageService.remove(keyStoragesCredential);
    return next({
      type: LOGOUT,
      payload: {
        loading: Boolean(!res.data)
      }
    });
  }

  return next(action);
};
