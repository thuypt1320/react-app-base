import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
export const useLoginMutation = () => {
  const login = async () => {
    const res = await authRepository.login();
    storageService.set(keyStoragesCredential, res.data);
  };

  return ({
    login
  });
};
