import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private getToken(): string | null {
    return localStorage.getItem('token');
  }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public isAuthenticated(): string | null {
    const token = this.getToken();
    if (!token) return null;
    else return token;
  }
}
