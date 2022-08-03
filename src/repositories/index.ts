import { AuthRepository } from 'src/repositories/auth_repository';
import { axiosWithAuth, axiosWithoutAuth } from 'src/libs/axios';
import { UserRepository } from 'src/repositories/user_repository/user_repository';

export const authRepository = new AuthRepository(axiosWithAuth, axiosWithoutAuth);
export const userRepository = new UserRepository(axiosWithAuth, axiosWithoutAuth);
