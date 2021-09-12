import { DodamAPI } from './api';

export class LoggedClient {
  constructor(
    private token: string,
  ) { }

  getUser() {
    return DodamAPI.getUser(this.token);
  }
}