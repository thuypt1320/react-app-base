import { authRepository } from 'src/repositories';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
export const useLogoutMutation = () => {
  const logout = async () => {
    await authRepository.logout();
    storageService.remove(keyStoragesCredential);
  };

  return ({
    logout
  });
};
