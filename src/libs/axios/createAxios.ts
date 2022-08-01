import axios from 'axios';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
import { ICredential } from 'types/credential';

interface IConfig {
  withAuthToken: boolean;
}

const defaultConfig: IConfig = {
  withAuthToken: true
};

export function createAxios (config?: IConfig) {
  const configValue = config || defaultConfig;
  const baseURL = '/';
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
      if (!credential) {
        window.location.href = '/login';
      }
      if (credential.access_token) {
        requestConfig.headers.Authentication = `Bearer ${credential.access_token}`;
      }
    });
  }
  return client;
}
