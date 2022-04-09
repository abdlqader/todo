import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/user/login.service';
import { RegisterService } from '../services/user/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private registerService: RegisterService
  ) {}
  public loginValid = true;
  public email = '';
  public password = '';
  public name = '';
  public isLogin = true;
  ngOnInit(): void {}
  async onSubmit() {
    this.loginValid = true;
    let result: boolean;
    try {
      if (this.isLogin) {
        this.loginService.setBody({
          email: this.email,
          password: this.password,
        });
        result = await this.loginService.make();
      } else {
        this.registerService.setBody({
          email: this.email,
          password: this.password,
          name: this.name,
        });
        result = await this.registerService.make();
      }
      if (!result) {
        this.loginValid = false;
      }
    } catch (error) {
      this.loginValid = false;
    }
  }
  switch() {
    this.isLogin = !this.isLogin;
  }
}
