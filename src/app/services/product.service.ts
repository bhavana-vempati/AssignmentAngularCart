import { Injectable } from "@angular/core";
import { PRODUCTS } from "../models/product-data";
import { Product } from "../models/Product";
import { Observable, Subject } from "rxjs";
@Injectable()
export class ProductService {
  constructor() {}

  getProducts() {
    return Promise.resolve(PRODUCTS);
  }

  getProduct(id) {
    return this.getProducts().then(products =>
      products.find(product => product.id === id)
    );
  }
}

// import { Injectable } from "@angular/core";
// import { HttpClient, HttpResponse } from "@angular/common/http";

// @Injectable()
// export class ProductService {
//   constructor(private http: HttpClient) {}

//   getData() {
//     return this.http.get(`https://api.myjson.com/bins/qzuzi`);
//   }
// }
