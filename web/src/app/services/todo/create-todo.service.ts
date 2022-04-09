import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { BaseLoggedRequestService } from '../base-logged-request.service';
import url from '../../URLS';
@Injectable({
  providedIn: 'root',
})
export class CreateTodoService extends BaseLoggedRequestService {
  constructor(protected httpClient: HttpClient, protected auth: AuthService) {
    super(httpClient, auth);
    super.setMethod('post');
    super.setPath(url.todo);
  }
}
