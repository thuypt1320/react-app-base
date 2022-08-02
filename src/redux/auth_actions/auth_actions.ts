import { GET_PROFILE, LOGIN, LOGOUT } from 'src/redux/auth_types';
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
