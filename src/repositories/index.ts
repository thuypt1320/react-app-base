import { AuthRepository } from 'src/repositories/authRepository';
import { axiosWithAuth, axiosWithoutAuth } from 'src/libs/axios';

export const authRepository = new AuthRepository(axiosWithAuth, axiosWithoutAuth);
