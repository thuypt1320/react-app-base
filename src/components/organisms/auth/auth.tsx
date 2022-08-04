import { FC, ReactNode, useEffect } from 'react';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
import { useNavigate } from 'react-router';
import { ICredential } from 'types/credential';
import { authSelector } from 'src/redux/stores';

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

  const profile = authSelector();

  useEffect(() => {
    if (!profile && credential) {
      navigator('/');
    }
  }, [profile]);

  return <div>
    {children}
  </div>;
};
