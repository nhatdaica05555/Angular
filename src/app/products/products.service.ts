import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  getProducts() : string[] {
    return ['sp1' , 'sp2' , 'sp3'];
  }
  constructor() { }
}