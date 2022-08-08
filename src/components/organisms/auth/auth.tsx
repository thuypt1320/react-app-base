import { cloneElement, FC, ReactNode, useEffect, useState } from 'react';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
import { useNavigate } from 'react-router';
import { ICredential } from 'types/credential';
import {
  allConnect,
  AllConnectProps,
  authSelector,
  subscribe
} from 'src/redux/stores';
import { AuthState } from 'src/redux/reducers/auth_reducer';
import { updateState } from 'src/utils/updateState';

interface AuthProviderProps extends AllConnectProps {
  children: ReactNode;
}

export const Auth = allConnect(({
  children,
  data
}: AuthProviderProps) => {
  const credential = storageService.get(keyStoragesCredential) as ICredential;
  const navigator = useNavigate();
  const [profile, setProfile] = useState<AuthState>(data);

  useEffect(() => {
    subscribe(() => {
      setProfile(authSelector);
      updateState(profile);
    });
  }, [data]);

  useEffect(() => {
    if (!credential) {
      navigator('/login');
    }
  }, [profile]);

  useEffect(() => {
    if (profile.data && window.location.pathname === '/login') {
      navigator('/');
    }
  }, [profile]);

  return <div>
    {JSON.stringify(profile)}
    {children}
  </div>;
});
