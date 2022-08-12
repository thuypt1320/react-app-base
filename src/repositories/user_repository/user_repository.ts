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
    name: string,
    email: string
  }) {
    console.log({ _params });
    return this.axiosWithToken.put(`/users/${_params.id}`,
      {
        name: _params.name,
        email: _params.email
      });
  }

  async create (_params: {
    name: string,
    email: string
  }) {
    return this.axiosWithToken.post('/users',
      {
        name: _params.name,
        email: _params.email
      });
  }

  async remove (_params: {
    id: string
  }) {
    return this.axiosWithToken.delete(`/users/${_params.id}`);
  }
}
