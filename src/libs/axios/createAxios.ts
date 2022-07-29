import axios from 'axios';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { stores } from 'src/redux/stores';
import { logout } from 'src/redux/authReducer';
import { ICredential } from 'src/repositories/authRepository/models';

interface IConfig {
  withAuthToken: boolean;
}

const defaultConfig: IConfig = {
  withAuthToken: true
};

export function createAxios (config?: IConfig) {
  const configValue = config || defaultConfig;
  const baseURL = '';
  const headers = {
    'Content-Type': 'application/json'
  };

  const client = axios.create({
    baseURL,
    headers
  });

  if (!configValue.withAuthToken) {
    client.interceptors.request.use((requestConfig) => {
      const credential = storageService.get(keyStoragesCredential) as ICredential;

      if (!credential.token) {
        stores.dispatch(logout());
      }

      if (credential.token) {
        requestConfig.headers.Authentication = `Bearer ${credential.token}`;
      }
    });
  }
  return client;
}
