import { AxiosInstance } from 'axios';
export class AuthRepository {
  private axiosWithToken: AxiosInstance;
  private axiosWithoutToken: AxiosInstance;

  constructor (axiosWithToken: AxiosInstance, axiosWithoutToken: AxiosInstance) {
    this.axiosWithToken = axiosWithToken;
    this.axiosWithoutToken = axiosWithoutToken;
  }

  async login () {
    return this.axiosWithoutToken.get('/login');
  }

  async getProfile () {
    return this.axiosWithToken.get('/profile');
  }
}
