import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  /*selector: '...', 页面组件不需要selector*/
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  id: number;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((params: Params) => {
      console.log(params);
    });
  }

}

export class Product {
  src: string;
  title: string;
  sellCount: number;
  price: number;
  shopname: string;
  loc: string;
  rating: number;
  constructor(args?: Product) {
    if (args) {
      Object.assign(this, args);
    }
  }
}
/* var res = [];
for(let ele of document.querySelectorAll('.item.J_MouserOnverReq')){
	console.log(ele)
	let src = ele.querySelector('.J_ItemPic.img').src;
	//
	var cnt = ele.querySelector('.deal-cnt').innerText;
	var sellCount = 0;
  var indexWan = cnt.indexOf('万');
  var indexMore = cnt.indexOf('+');
  var indexPerson = cnt.indexOf('人');
  if(indexWan > -1){
  	sellCount = parseInt(cnt.substring(0, indexWan)) * 10000;
  }else if(indexMore > -1){
  	sellCount = parseInt(cnt.substring(0, indexMore));
  }else if(indexPerson > -1){
  	sellCount = parseInt(cnt.substring(0, indexPerson));
  }
  //
  var price = parseFloat(ele.querySelector('.price.g_price.g_price-highlight strong').innerText)
  //
  var title = ele.querySelector('.row.title').innerText
  //
  var shopname = ele.querySelector('.shopname > span:last-of-type').innerText;
  //
  var loc = ele.querySelector('.location').innerText;
	res.push({src, title, sellCount, price, shopname, loc});
}
console.log(JSON.stringify(res));*/
