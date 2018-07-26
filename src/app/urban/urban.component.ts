import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'urban',
  templateUrl: './urban.component.html',
  styleUrls: ['./urban.component.css']
})
export class UrbanComponent implements OnInit {
  private url = "http://api.urbandictionary.com/v0/define?term="
  private url_Speach = "https://www.bing.com/tspeak?&format=audio%2Fmp3&language=en&IG=D2CBB80AA6824D9A91B0A5D1074FC4A1&IID=translator.5034.2&text="
  list : any[]
  filled : boolean = false
  constructor(private http : Http) { }

  ngOnInit() {
  }

  getMeaning(vocab : HTMLInputElement){
    this.http.get(this.url+vocab.value).subscribe(response => {
      this.list = response.json().list
      if (this.list.length != 0){
        this.filled = true
      }else{
        this.filled = false
      }
    })
  }
  processString(str:string){
    str =  str.replace(/[^a-zA-Z\s']/g , '')
    return str
  }

  readText(text: string){
    return this.url_Speach+text
  }
}
