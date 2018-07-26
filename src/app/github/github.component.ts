import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  posts : any[]
  private url = "https://api.github.com/search/users?q=greg"
  constructor(private http : Http){
    this.http.get(this.url).subscribe(response => {
      // console.log(response.json().items)
      this.posts = response.json().items
      console.log(this.posts)
    })
  }
  
}
