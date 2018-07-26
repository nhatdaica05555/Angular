import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  countries = ['Viet Nam' , 'Laos' , 'Thai Lan' , 'Philipin' , 'Canada'];
  gender = [{id  : 1 , name : 'Male'}  ,{id : 2 , name : 'Female'}];


  submitted : boolean =  false;
  model = new User("","","",false);
  onSubmmit(){
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
