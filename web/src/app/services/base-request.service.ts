import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseRequestService {
  private _path!: string;
  private _method!: 'post' | 'put' | 'get' | 'delete';
  private _params!: {};
  private _headers!: {};
  private _result: any;

  getResult() {
    return this._result;
  }
  setResult(r: any) {
    this._result = r;
  }

  getPath() {
    return this._path;
  }

  setPath(path: string) {
    this._path = path;
  }
  getMethod(): 'post' | 'put' | 'get' | 'delete' {
    return this._method;
  }

  setMethod(methohd: 'post' | 'put' | 'get' | 'delete') {
    this._method = methohd;
  }
  getBody() {
    return this._params;
  }

  setBody(params: any) {
    this._params = params;
  }

  getHeaders() {
    return this._headers;
  }

  setHeaders(
    headers:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        }
  ) {
    this._headers = headers;
  }

  processResult(response: any) {
    return response;
  }

  private preProcessResult(response: any) {
    // TODO: check status numbers for generic cases
    switch (response.status) {
      case 400:
        throw { faultyRequest: response };
      case 401:
        this.auth.logout();
        break;
      case 404:
        // redirect to 404 page
        break;
      case 422:
        throw { validationErrors: response };
      default:
        break;
    }
    return this.processResult(response);
  }

  async make(): Promise<any> {
    let res, rej;
    try {
      res = await this._make();
    } catch (err) {
      rej = err;
    }
    if (res) {
      return Promise.resolve(res);
    }
    if (rej) {
      return Promise.reject(rej);
    }
  }

  protected async _make(): Promise<any> {
    const body = this.getBody();
    const path = this.getPath();
    const headers = this.getHeaders();
    const method = this.getMethod();
    try {
      let result = await this.httpClient
        .request(method, path, { body, headers })
        .toPromise();
      this.setResult(result);
      return this.preProcessResult(result);
    } catch (error) {
      return this.preProcessResult(error);
    }
  }
  constructor(protected httpClient: HttpClient, protected auth: AuthService) {}
}
