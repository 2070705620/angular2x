import {Component, ChangeDetectorRef, Inject, Input, OnInit} from '@angular/core';
import {Employee} from './Employee';
import * as $ from 'jquery';

@Component({
  selector: 'app-empl-form',
  template: `
    <h1>
      <form>
        <input type="text"
          [(ngModel)]="empl.name"
          [ngModelOptions]="{standalone: true}"
          placeholder="请输入员工信息"/>
      </form>
    </h1>`,
  styleUrls: ['./empl.form.component.css'],
  providers: []
})
export class EmplFormComponent implements
  OnInit {
  @Input() empl: Employee;
  constructor() {
    console.log('构造函数执行');
  }
  ngOnInit() {
    console.log('this.empl=>' + this.empl + ' jquery' + $(document.body));
  }
}

