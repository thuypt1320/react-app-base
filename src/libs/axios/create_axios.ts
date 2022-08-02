import axios from 'axios';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
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

  const credential = storageService.get(keyStoragesCredential) as ICredential;

  if (credential && credential.access_token) {
    if (!configValue.withAuthToken) {
      client.interceptors.request.use((requestConfig) => {
        requestConfig.headers.Authentication = `Bearer ${credential.access_token}`;
        return requestConfig;
      });
      return client;
    }
  }
  return client;
}
