import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLogin = false

  login(username,password){
    if (username === "admin" && password == "admin"){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
    return this.isLogin
  }

  logout(){
    this.isLogin = false
    return this.isLogin
  }
  

  constructor() { }

}
