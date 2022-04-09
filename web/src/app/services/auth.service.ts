import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  public login(token: string) {
    this.setToken(token);
    this.router.navigate(['/home']);
  }
  private getToken(): string | null {
    return localStorage.getItem('token');
  }
  private setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public isAuthenticated(): string | null {
    const token = this.getToken();
    if (!token) return null;
    else return token;
  }
  public logout(): void {
    localStorage.clear();
    this.router.parseUrl('');
  }
}
