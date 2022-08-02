import { AuthRepository } from 'src/repositories/auth_repository';
import { axiosWithAuth, axiosWithoutAuth } from 'src/libs/axios';

export const authRepository = new AuthRepository(axiosWithAuth, axiosWithoutAuth);
