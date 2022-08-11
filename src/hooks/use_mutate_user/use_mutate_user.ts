import { stores } from 'src/redux/stores';
import { create, update } from 'src/redux/actions';
import { useState } from 'react';

export const useMutateUser = () => {
  const [loading, setLoading] = useState(stores.getState().common.loading);
  const dispatch = stores.dispatch;
  return {
    loading,
    update: (formValue) => {
      dispatch(update(formValue));
      setLoading(stores.getState().common.loading);
    },
    create: (formValue) => {
      dispatch(create(formValue));
      setLoading(stores.getState().common.loading);
    }
  };
};
