import {Component, ChangeDetectorRef, Inject} from '@angular/core';
import {AbcdService} from './abcd.service';
import {Employee, EmployeeService} from './Employee';

@Component({
  selector: 'app-helloworld',
  template: `
    <h1>
      <app-empl-form [empl]="employForm"></app-empl-form>
        <a >Home</a>Hell{{i}}lllll{{f}}o
        <span [ngClass]="{active: isGray}">sp</span>
        <em *ngFor="let l of letters">{{l}}</em>
        <input type="text" [(ngModel)]="fSize" (keyup)="c($event)"/>
        <form onsubmit="return false;">
          <fieldset>
            <legend>员工编辑</legend>
            <section class="employee_input_wrapper">
              <input type="text" [(ngModel)]="employForm.name" [ngModelOptions]="{standalone: true}"
              />
              <!--(focus)="inputFocus()"
                  (blur)="inputBlur()"-->
              <ul class="employee_input_tooltip" [hidden]="!showEmployeeTooltip">
                <li *ngFor="let e of employeeList">{{e.name}}</li>
              </ul>
            </section>
            <button (click)="execute()">执行</button>
            <table>
              <tr *ngFor="let employee of employeeList">
                <td>{{employee.id}}</td>
                <td>{{employee.name}}</td>
                <td><button (click)="edit(employee)">编辑</button></td>
                <td><button (click)="deletex(employee.id)">删除</button></td>
              </tr>
            </table>
          </fieldset>
        </form>
    </h1>`,
  styleUrls: ['./helloworld.component.css'],
  // styles: [
  //   'h1{ color: red;}',
  //   '.active{ color: gray;}'
  // ],
  providers: [EmployeeService]
})
export class HelloworldComponent {
  name = 'helllo';
  i = 10;
  f: number;
  fSize = 60;
  isGray = true;
  letters = 'I want somthing just like this'.split(' ');
  /*展示员工输入框提示*/
  showEmployeeTooltip = false;
// showEmployeeTooltipTimeoutInd: number;
  employForm = new Employee();
  employeeList: Array<Employee> = [];
  constructor(private cd: ChangeDetectorRef,
              private abcdService: AbcdService,
              private employeeService: EmployeeService) {
    this.employeeList = employeeService.employeeList;
    cd.markForCheck();
    // setInterval( () => {
    //   employeeService.saveOrUpdateEmployee(new Employee(0, 'pom'));
    //   this.employeeList = employeeService.employeeList;
    // }, 1000)
  }
  execute() {
    this.employeeService.saveOrUpdateEmployee(this.employForm);
    this.employeeList =  this.employeeService.employeeList;
    this.employForm = new Employee();
  }
  edit(employee: Employee) {
    this.employForm = employee; /*同步列表的*/
  }
  deletex(id: number) {
    this.employeeService.deletex(id);
    this.employeeList = this.employeeService.employeeList;
  }
  c(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      this.fSize++;
    } else if (event.keyCode === 40) {
      this.fSize--;
    }
  }
  inputFocus() {
    // clearTimeout(this.showEmployeeTooltipTimeoutInd);
    this.showEmployeeTooltip = true;
  }
  inputBlur() {
    // this.showEmployeeTooltipTimeoutInd = setTimeout(() => {
      this.showEmployeeTooltip = false;
    // }, 500000);
  }
}


@Component({
  selector: 'app-helloworld2',
  template: `<h1>Hell{{i}}lllll{{f}}o</h1>`,
  styles: ['h1{color: red;}']
})
export class Helloworld2Component {
  name = 'helllo';
  i = 10;
  f: number;
}
