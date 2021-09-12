import { ClientConfig } from './types';
import * as api from './api'
import { LoggedClient } from './LoggedClient';

export * from './api';

export class AuthClient {
  constructor(
    private config: ClientConfig
  ) {}

  async login(code: string) {
    const result =  await api.getToken(code, this.config.clientId, this.config.clientSecret);
    return new LoggedClient(result.token);
  }

  getToken(code: string) {
    return api.getToken(code, this.config.clientId, this.config.clientSecret);
  }

  refreshToken(refreshToken: string) {
    return api.refreshToken(refreshToken, this.config.clientId);
  }

  getUser(token: string) {
    return api.getUser(token);
  }
}

export default AuthClient;
