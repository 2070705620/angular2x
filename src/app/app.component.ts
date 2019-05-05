import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a  (click)="toHello()">Hello</a>
    <a [routerLink]="['/']">Home</a>
    <button (click)="genRandomId()" [routerLink]="['product', randomId]">产品1</button>
    <router-outlet></router-outlet>`
  ,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'angular2x';
  helloId: number;
  randomId: number;
  constructor(private router: Router) {}
  ngOnInit() {
    this.genRandomId();
  }
  genRandomId() {
    this.randomId = Math.round(Math.random() * 100);
  }
  toHello() {
    this.router.navigate(['/hello'], {
      queryParams: {id: Math.round(Math.random() * 1000)}
    });
    // this.helloId = Math.round(Math.random() * 1000);
  }
}
