import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { AuthguardService } from '../services/authguard.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   isLogin : boolean = true

  constructor(private authService : AuthguardService, private router : Router) { }

  ngOnInit() {
  }

  form = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })

  onSubmit(){
    if (this.authService.canActivate(this.form.value.username , this.form.value.password)){
      this.router.navigate(['admin'])
    }
  }

}
