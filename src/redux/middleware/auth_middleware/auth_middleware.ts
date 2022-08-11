import {
  GET_PROFILE,
  LOGIN,
  LOGOUT
} from 'src/redux/types/auth_action_types';
import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
import { getProfile, login, logout } from 'src/redux/actions/auth_actions';
import { DONE, ERROR, PROCESSING } from 'src/redux/types';

export const authMW = store => next => async action => {
  // *** Arrange action types with 'if'
  if (action.type === LOGOUT) {
    try {
      storageService.remove(keyStoragesCredential);
      return next(logout());
    } catch (e) {
      next({ type: ERROR });
    }
  }

  if (action.type === GET_PROFILE) {
    try {
      const res = await authRepository.getProfile();
      if (!res.data) next({ type: PROCESSING });
      if (res.data) next({ type: DONE });
      return next(getProfile({
        user: res.data[0]
      }));
    } catch (e) {
      next({ type: ERROR });
    }
  }

  if (action.type === LOGIN) {
    try {
      const res = await authRepository.login();
      if (!res.data) next({ type: PROCESSING });
      if (res.data) {
        next({ type: DONE });
        const isAllowed = (action.payload.username === res.data[0]?.user?.name && action.payload.password === 'password') ||
            action.payload.type === 'google';
        if (isAllowed) {
          const profile = await authRepository.getProfile();
          if (profile.data) next({ type: DONE });
          if (profile.data) {
            next({ type: DONE });
            const user = profile.data[0];
            storageService.set(keyStoragesCredential, {
              user,
              access_token: res.data[0].access_token
            });
            return next(login({
              user,
              access_token: res.data[0].access_token
            }));
          }
        }
      } else {
        next({ type: ERROR });
      }
    } catch (e) {
      next({ type: ERROR });
      return next(logout());
    }
  }

  return next(action);
}
;
