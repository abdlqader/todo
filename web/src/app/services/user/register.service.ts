import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequestService } from '../base-request.service';
import url from '../../URLS';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends BaseRequestService {
  constructor(protected httpClient: HttpClient, private auth: AuthService) {
    super(httpClient);
    super.setMethod('post');
    super.setPath(url.user.register);
  }
  async processResult(response: { token: string }) {
    if (response.token) {
      this.auth.login(response.token);
      return true;
    } else return false;
  }
}
