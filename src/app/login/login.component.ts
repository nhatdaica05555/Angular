import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username : string
  password : string 

  form  = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''), 
  })

  

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.value)
  }
}
