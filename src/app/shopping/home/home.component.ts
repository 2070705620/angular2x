import {Component, OnInit, AfterViewInit, QueryList, AfterViewChecked,
  ViewChild,
  ViewChildren,
  ElementRef} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../product/product.component';
import {Router} from '@angular/router';

import * as $clamp from 'clamp-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewChecked, AfterViewInit {

  productList: Array<Product> = [];
  productLiWidth = 100;
  timeoutInd: number;
  constructor(
    private productServiceService: ProductServiceService,
    private elementRef: ElementRef,
    private router: Router) { }

  @ViewChild('productDom')
  productDom: ElementRef;
  @ViewChildren('productTitles')
  productTitleDom: QueryList<ElementRef>;

  ngOnInit() {
    console.log($clamp);

    this.productList = this.productServiceService.searchProduct();
    console.log(this.productList);
    this.onResize(this.elementRef.nativeElement.querySelector('.product-list'));

    // 渲染之后 类似Vue的$nextTick
    setTimeout(() => {
      this.productTitleDom && this.productTitleDom.forEach(_ => $clamp(_.nativeElement, {clamp: 2}));
    }, 0);
  }
  ngAfterViewInit() {
    console.log(this.elementRef.nativeElement.querySelector('.product-list').getBoundingClientRect().width);

  }
  ngAfterViewChecked() {
    // this.onResize(this.elementRef.nativeElement.querySelector('.product-list'));
  }
  onResize(productUl: HTMLElement) {
    clearTimeout(this.timeoutInd);
    this.timeoutInd = setTimeout(() => {
      const width = productUl.getBoundingClientRect().width;
      console.log(width);
      this.productLiWidth = (width - 10 - 10 - 10) / 4 + 0;
    }, 100) as any;
  }
  toHello() {
    this.router.navigate(['/hello']);
  }

}
