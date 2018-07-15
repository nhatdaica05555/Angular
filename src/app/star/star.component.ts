import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  rating = 0;

  onClick(ratingValue) {
    this.rating = ratingValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
