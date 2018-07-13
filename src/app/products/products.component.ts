import { Component, OnInit } from '@angular/core';
import {  ProductsService } from './products.service';
@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product  = new ProductsService;

  products = this.product.getProducts();

  constructor() { }

  ngOnInit() {
  }

}
