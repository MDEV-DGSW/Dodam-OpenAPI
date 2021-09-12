import { ClientConfig } from './types';
import { LoggedClient } from './LoggedClient';
import { DodamAPI } from './api';

export class AuthClient {
  constructor(
    private config: ClientConfig
  ) {}

  async login(code: string) {
    const result = await DodamAPI.getToken(code, this.config.clientId, this.config.clientSecret);
    return new LoggedClient(result.token);
  }

  getToken(code: string) {
    return DodamAPI.getToken(code, this.config.clientId, this.config.clientSecret);
  }

  refreshToken(refreshToken: string) {
    return DodamAPI.refreshToken(refreshToken, this.config.clientId);
  }

  getUser(token: string) {
    return DodamAPI.getUser(token);
  }
}

export default AuthClient;
