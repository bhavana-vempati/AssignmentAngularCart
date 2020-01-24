import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Product } from "../../models/Product";
import { ProductService } from "../../services/product.service";
import { CartAction } from "../../store/actions/cart.actions";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
  products: Product[];
  quantity: number;
  orderedProducts;
  price: any;
  discount: any;
  queryString: any;

  //  searchDisplay: boolean = false;
  constructor(
    private productService: ProductService,
    private router: Router,
    private cartStore: CartAction
  ) {}

  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    let link = ["/detail", product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product) {
    this.cartStore.addToCart(product, this.quantity || 1);
  }

  getProductData() {
    this.productService
      .getProducts()
      .then(products => (this.products = products));
  }
  //   displaySearch() {
  //     this.searchDisplay = true;
  //   }
  ngOnInit() {
    // Get initial data from productService to display on the page
    this.getProductData();
  }
  sortByLow(field: string) {
    this.products.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedProducts = this.products;
  }
  //sort to get higest value first
  sortByHigh(field: string) {
    this.products.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedProducts = this.products;
  }
  //sort to get more discount first
  sortBy(field: string) {
    this.products.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedProducts = this.products;
  }
  sortByLowtoHigh(price: any) {
    this.sortByLow("price");
  }
  sortByHigtoLow(price: any) {
    this.sortByHigh("price");
  }
  sortByDiscount(discount: any) {
    this.sortBy("discount");
  }
}
