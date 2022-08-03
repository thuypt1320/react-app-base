import { AxiosInstance } from 'axios';
export class UserRepository {
  private axiosWithToken: AxiosInstance;
  private axiosWithoutToken: AxiosInstance;

  constructor (axiosWithToken: AxiosInstance, axiosWithoutToken: AxiosInstance) {
    this.axiosWithToken = axiosWithToken;
    this.axiosWithoutToken = axiosWithoutToken;
  }

  async list () {
    return this.axiosWithToken.get('/users');
  }

  async detail (id: string) {
    return this.axiosWithToken.get(`/users/${id}`);
  }

  async update (_params: {
    id: string,
    name: string
  }) {
    return this.axiosWithToken.put(`/users/${_params.id}`,
      { name: _params.name });
  }
}
