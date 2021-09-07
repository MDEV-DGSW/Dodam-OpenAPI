import { ClientConfig } from './types';
import * as api from './api'

export * from './api';

export class AuthClient {
  constructor(
    private config: ClientConfig
  ) {}

  async login(code: string) {
    return await api.getToken(code, this.config.clientId, this.config.clientSecret);
  }

  async getToken(code: string) {
    return await api.getToken(code, this.config.clientId, this.config.clientSecret);
  }

  async refreshToken(refreshToken: string) {
    return await api.refreshToken(refreshToken, this.config.clientId);
  }

  async getUser(token: string) {
    return await api.getUser(token);
  }
}

export default AuthClient;
