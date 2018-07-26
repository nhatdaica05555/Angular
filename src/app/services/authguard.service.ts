import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class AuthguardService implements CanActivate{

  constructor(private loginServer : LoginService , private router : Router) { }
  canActivate(username , password){
    if(this.loginServer.login(username , password)){
      return true
    }
    this.router.navigate(['/register'])
    return false
  }
  // login(username , password){
  //   if (this.canActivate){
  //     if (this.loginServer.login(username , password)){
  //       this.router.navigate(['admin'])
  //     }
  //   }
  // }
  
}
