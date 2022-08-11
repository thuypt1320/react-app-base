import { stores, subscribe } from 'src/redux/stores';
import {
  getProfile,
  login as loginAct,
  logout as logoutAct
} from 'src/redux/actions';
import { useEffect, useState } from 'react';
export const useAuth = () => {
  const [data, setData] = useState(stores.getState().auth);
  const [loading, setLoading] = useState(stores.getState().common.loading);
  const dispatch = stores.dispatch;

  useEffect(() => {
    if (data.access_token) {
      dispatch(getProfile({}));
      subscribe(() => {
        setData(stores.getState().auth);
        setLoading(stores.getState().common.loading);
      });
    }
  }, []);

  return {
    data,
    loading,
    getProfile: () => {
      dispatch(getProfile({}));
      subscribe(() => {
        setData(stores.getState().auth);
        setLoading(stores.getState().common.loading);
      });
    },
    login: (payload) => {
      dispatch(loginAct(payload));
      subscribe(() => {
        setData(stores.getState().auth);
        setLoading(stores.getState().common.loading);
      });
    },
    logout: () => {
      dispatch(logoutAct());
      subscribe(() => {
        setData(stores.getState().auth);
        setLoading(stores.getState().common.loading);
      });
    }
  };
};
