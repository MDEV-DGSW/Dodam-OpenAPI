import * as api from './api';

export class LoggedClient {
  constructor(
    private token: string,
  ) { }

  getUser() {
    return api.getUser(this.token);
  }
}