import {
  CREATE,
  GET_DETAIL,
  GET_LIST,
  UPDATE,
  DELETE
} from 'src/redux/types/user_action_types/user_action_types';
export const getList = (payload) => {
  return {
    type: GET_LIST,
    payload
  };
};

export const getDetail = (payload) => {
  return ({
    type: GET_DETAIL,
    payload
  });
};

export const update = (payload) => {
  return ({
    type: UPDATE,
    payload
  });
};

export const create = (payload) => {
  return ({
    type: CREATE,
    payload
  });
};

export const remove = (payload) => {
  return ({
    type: DELETE,
    payload
  });
};
