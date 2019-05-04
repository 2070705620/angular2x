import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a  (click)="toHello()">Hello</a>
    <a [routerLink]="['/']">Home</a>
    <router-outlet></router-outlet>`
  ,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'angular2x';
  helloId: number;
  constructor(private router: Router) {}
  ngOnInit() {
  }
  toHello() {
    this.router.navigate(['/hello'], {
      queryParams: {id: Math.round(Math.random() * 1000)}
    });
    // this.helloId = Math.round(Math.random() * 1000);
  }
}
