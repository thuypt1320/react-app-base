import { FC, ReactNode, useEffect } from 'react';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
import { useNavigate } from 'react-router';
import { ICredential } from 'types/credential';
import { dispatch, stores } from 'src/redux/stores';
import { GET_PROFILE } from 'src/redux/auth_types';

interface AuthProviderProps {
  children: ReactNode;
}

export const Auth: FC<AuthProviderProps> = ({ children }) => {
  const credential = storageService.get(keyStoragesCredential) as ICredential;
  const navigator = useNavigate();

  useEffect(() => {
    if (!credential) {
      navigator('/login');
    }
  }, []);

  const profile = stores.getState().auth;

  useEffect(() => {
    if (!profile && credential) {
      dispatch({ type: GET_PROFILE });
      navigator('/');
    }
  }, [profile]);

  return <div>
    {children}
  </div>;
};
