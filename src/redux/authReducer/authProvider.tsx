import { FC, ReactNode, useEffect } from 'react';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { useNavigate } from 'react-router';
import { ICredential } from 'types/credential';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const credential = storageService.get(keyStoragesCredential) as ICredential;
  const navigator = useNavigate();

  useEffect(() => {
    if (!credential) {
      navigator('/login');
    }
  }, [credential]);

  return <div>
    {children}
  </div>;
};
