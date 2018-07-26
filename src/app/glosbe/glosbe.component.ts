import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'glosbe',
  templateUrl: './glosbe.component.html',
  styleUrls: ['./glosbe.component.css']
})
export class GlosbeComponent implements OnInit {

  lists : any[]
  private url = "https://glosbe.com/gapi/translate?from=eng&dest=fra&format=xml&phrase=cat&pretty=true"
  constructor(private http : Http) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      console.log(response.json())
    })
  }


  getList(){
    console.log('enterd')
  }
}
