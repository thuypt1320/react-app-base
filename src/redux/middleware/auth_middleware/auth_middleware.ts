import {
  GET_PROFILE,
  LOGIN,
  LOGOUT
} from 'src/redux/types/auth_action_types';
import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
import { getProfile, login, logout } from 'src/redux/actions/auth_actions';

export const authMW = store => next => async action => {
  // *** Arrange action types
  if (action.type === LOGOUT) {
    const res = await authRepository.logout();
    storageService.remove(keyStoragesCredential);
    return next(logout());
  }

  if (action.type === GET_PROFILE) {
    const res = await authRepository.getProfile();
    return next(getProfile({
      loading: Boolean(!res.data),
      data: res.data
    }));
  }

  if (action.type === LOGIN) {
    const res = await authRepository.login();
    storageService.set(keyStoragesCredential, res.data);
    const credential = storageService.get(keyStoragesCredential);
    if (credential) {
      return next(login({
        loading: Boolean(!res.data),
        data: res.data.user
      }));
    }
  }

  return next(action);
};
