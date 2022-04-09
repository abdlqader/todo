import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root',
})
export class BaseLoggedRequestService extends BaseRequestService {
  constructor(protected httpClient: HttpClient, protected auth: AuthService) {
    super(httpClient, auth);
  }
  protected async _make() {
    const token = this.auth.isAuthenticated();
    this.setHeaders(new HttpHeaders({ authorization: token ? token : '' }));
    return super._make();
  }
}
