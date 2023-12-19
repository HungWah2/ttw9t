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
    } else if(username.length == 0 && password.length == 0)
    {
      alert('Please enter username and password');

    } else if(username.length == 0)
    {
      alert('Please enter username');

    } else if(password.length == 0)
    {
      alert('Please enter password');

    }
    else if(username.length > 15 || password.length > 15)
    {
      alert('Username and password must be less than 15 characters');
    } else
    {
      alert('Invalid username or password');
    }
  }


  logout()
  {
    this.session = null;
    this.router.navigate(['/home']);
    alert('You have been logged out');
  }

}
