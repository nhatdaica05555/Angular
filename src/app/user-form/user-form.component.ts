import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  countries = ['Viet Nam' , 'Laos' , 'Thai Lan' , 'Philipin'];

  submitted : boolean =  false;
  model = new User("","","");
  onSubmmit(){
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
