import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  
  year : number
  month : number

  constructor(private route : ActivatedRoute ){
    this.route.params.subscribe(param => {
      console.log(typeof param)
    this.year = param['nam']
    this.month = param['thang']

    })
  }

}
