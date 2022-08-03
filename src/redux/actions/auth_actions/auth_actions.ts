import { GET_PROFILE, LOGIN, LOGOUT } from 'src/redux/types/auth_action_types';
export const login = (payload) => {
  return ({
    type: LOGIN,
    payload
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
