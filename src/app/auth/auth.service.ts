import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session: any = null;
  username: string = '';
  password: string = '';
  constructor(private router:Router) { }

  login(username: string, password: string)
  {
    if(username == 'admin' && password == 'admin')
    {
      this.session = {username: 'admin'};
      this.router.navigate(['/admin']);
    } else if(username == 'user' && password == 'user')
    {
      this.session = {username: 'user'};
      this.router.navigate(['/user']);
    }
  }


  logout()
  {
    this.session = null;
    this.router.navigate(['/home']);
    alert('You have been logged out');
  }

}
