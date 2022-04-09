import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequestService } from '../base-request.service';
import url from '../../URLS';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseRequestService {
  constructor(protected httpClient: HttpClient, protected auth: AuthService) {
    super(httpClient, auth);
    super.setMethod('post');
    super.setPath(url.user.login);
  }
  async processResult(response: { token: string }) {
    if (response.token) {
      this.auth.login(response.token);
      return true;
    } else return false;
  }
}
