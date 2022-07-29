import { AxiosInstance } from 'axios';
import { ICredential } from 'src/repositories/authRepository/models';
export class AuthRepository {
  private axiosWithAuth: AxiosInstance;
  private axiosWithoutAuth: AxiosInstance;

  constructor (axiosWithAuth: AxiosInstance, axiosWithoutAuth: AxiosInstance) {
    this.axiosWithAuth = axiosWithAuth;
    this.axiosWithoutAuth = axiosWithoutAuth;
  }

  login (): ICredential {
    return ({
      user: {
        name: '-'
      },
      token: 'token'
    });
  }
}
