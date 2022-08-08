import { AxiosInstance } from 'axios';
export class AuthRepository {
  private axiosWithToken: AxiosInstance;
  private axiosWithoutToken: AxiosInstance;

  constructor (axiosWithToken: AxiosInstance, axiosWithoutToken: AxiosInstance) {
    this.axiosWithToken = axiosWithToken;
    this.axiosWithoutToken = axiosWithoutToken;
  }

  async login (_params?: {
    username: string,
    password: string
  }) {
    return this.axiosWithoutToken.post('/login', _params);
  }

  async getProfile () {
    return this.axiosWithToken.get('/profile');
  }

  async logout () {
    return this.axiosWithToken.post('/logout');
  }
}
