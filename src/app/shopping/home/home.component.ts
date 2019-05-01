import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  productList: Array<Product> = [];
  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit() {
    this.productList = this.productServiceService.searchProduct();

  }

}
