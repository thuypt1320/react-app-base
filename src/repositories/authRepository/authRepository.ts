import { ICredential } from 'src/repositories/authRepository/models';
export class AuthRepository {
  async login (): Promise<ICredential> {
    return fetch('/login', {
      method: 'POST'
    }).then(res => res.json());
  }

  async logout () {
    return fetch('/logout', {
      method: 'POST'
    });
  }

  async getProfile () {
    return fetch('/profile', {
      method: 'GET'
    }).then(res => res.json());
  }
}
