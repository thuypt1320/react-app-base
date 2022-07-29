import { stores } from 'src/redux/stores';
import { FC, ReactNode, useEffect, useState } from 'react';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { ICredential } from 'src/repositories/authRepository/models';
import { authRepository } from 'src/repositories';
import { setProfile } from 'src/redux/authReducer/authReducer';
import { User } from 'src/types';

interface AuthProviderProps {
  children: ReactNode;
}

const useFetchProfile = (): User => {
  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    authRepository.getProfile().then(data => {
      setProfile(data.user);
    });
  }, []);

  return profile;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const credential = storageService.get(keyStoragesCredential) as ICredential;

  if (credential) {
    const profile = useFetchProfile();
    stores.dispatch(setProfile(profile));
  }

  return <div>
    {children}
  </div>;
};
