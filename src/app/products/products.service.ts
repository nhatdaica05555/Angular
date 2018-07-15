import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  getProducts(){
    return [
      {
        imageUrl : "http://loremflickr.com/150/150?random=1",
        productName : "Product1",
        releasedDate: "Map 31, 2016",
        description :"this is a description of product",
        rating : 4,
        numofViews: 2
      },
      {
        imageUrl : "http://loremflickr.com/150/150?random=2",
        productName : "Product2",
        releasedDate: "Map 31, 2017",
        description :"this is a description of product",
        rating : 4,
        numofViews: 2
      }

    ];
  }

}
