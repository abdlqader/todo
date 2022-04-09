import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequestService } from '../base-request.service';
import url from '../../URLS';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseRequestService {
  constructor(protected httpClient: HttpClient, private auth: AuthService) {
    super(httpClient);
    super.setMethod('post');
    super.setPath(url.user.login);
  }
  async processResult(response: { token: string }) {
    this.auth.setToken(response.token);
    return true;
  }
}
