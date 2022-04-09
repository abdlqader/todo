import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import url from '../../URLS';
import { BaseLoggedRequestService } from '../base-logged-request.service';

@Injectable({
  providedIn: 'root',
})
export class FetchAllTodosService extends BaseLoggedRequestService {
  constructor(protected httpClient: HttpClient, protected auth: AuthService) {
    super(httpClient, auth);
    super.setMethod('get');
    super.setPath(url.todo);
  }
}
