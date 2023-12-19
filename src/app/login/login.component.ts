import { Component, Inject, NgModule } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private auth:AuthService) {

  }


  login() {
    this.auth.login(this.username, this.password);
  }
}
