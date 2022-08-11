import { userRepository } from 'src/repositories';
import {
  CREATE,
  GET_DETAIL,
  GET_LIST, UPDATE
} from 'src/redux/types/user_action_types/user_action_types';
import {
  create,
  getDetail,
  getList,
  update
} from 'src/redux/actions/user_actions';
import { DONE, ERROR, PROCESSING } from 'src/redux/types';

export const userMW = store => next => async action => {
  if (action.type === GET_LIST) {
    try {
      const res = await userRepository.list();
      if (!res.data) next({ type: PROCESSING });
      if (res.data) next({ type: DONE });
      return next(
        getList({
          loading: Boolean(!res.data),
          data: res.data
        })
      );
    } catch (e) {
      next({ type: ERROR });
    }
  }

  if (action.type === GET_DETAIL) {
    try {
      const res = await userRepository.detail(action?.payload?.id);
      if (!res.data) next({ type: PROCESSING });
      if (res.data) next({ type: DONE });
      return next(
        getDetail({
          loading: Boolean(!res.data),
          user: res.data
        })
      );
    } catch (e) {
      next({ type: ERROR });
    }
  }

  if (action.type === CREATE) {
    try {
      const res = await userRepository.create(action?.payload);
      if (!res.data) next({ type: PROCESSING });
      if (res.data) next({ type: DONE });
      return next(
        create({
          loading: Boolean(!res.data),
          user: res.data
        })
      );
    } catch (e) {
      next({ type: ERROR });
    }
  }

  if (action.type === UPDATE) {
    try {
      const res = await userRepository.update(action?.payload);
      if (!res.data) next({ type: PROCESSING });
      if (res.data) next({ type: DONE });
      return next(
        update({
          loading: Boolean(!res.data),
          user: res.data
        })
      );
    } catch (e) {
      next({ type: ERROR });
    }
  }

  return next(action);
};
