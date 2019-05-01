import {Injectable} from '@angular/core';

export class Employee {
  id: number;
  name: string;
  constructor(options?: any) {
    Object.assign(this, options);
  }
  /*更新的时候用到*/
  setByEmployee(emp: Employee) {
    this.name = emp.name;
  }
  reset() {
    this.id = 0;
    this.name = '';
  }
}
// window.Employee = Employee;

@Injectable()
export class EmployeeService {
  employeeList: Array<Employee> = [];
  constructor() {
    const employeeListStr = localStorage.getItem('employeeList');
    if (employeeListStr) {
      this.employeeList = JSON.parse(employeeListStr).map(_ =>  new Employee(_));
    }
  }
  saveOrUpdateEmployee(emp: Employee) {
    if (emp.id > 0) {
      const findEmp = this.employeeList.find(_ => {
        return _.id === emp.id;
      });
      if (!findEmp) {
        alert('修改失败，请刷新后再试');
        return;
      } else {
        findEmp.setByEmployee(emp);
        emp = findEmp;
      }
    } else {
      let maxId = 0;
      this.employeeList.forEach(_ => {
        maxId = Math.max(_.id , maxId);
      });
      emp.id = maxId + 1;
      this.employeeList.push(new Employee(emp));
    }
    localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
  }
  deletex(id: number) {
    const {employeeList} = this;
    const findEmp = employeeList.find(_ => _.id === id);
    if (findEmp) {
      employeeList.splice(employeeList.indexOf(findEmp), 1);
      localStorage.setItem('employeeList', JSON.stringify(employeeList));
    } else {
      alert('删除失败，请刷新后重试');
    }
  }
}

const _EMPLOYEE_LIST = [];
for (let i = 0 ; i < 10; i++) {
  const employee = new Employee();
  employee.id = Math.round(Math.random() * 100000000);
  employee.name = 'EM' + (1000 + employee.id % 1000);
  _EMPLOYEE_LIST.push(employee);
}

export const EMPLOYEE_LIST = _EMPLOYEE_LIST;

window.addEventListener('beforeunload',  (e: Event) => {
  alert(e);
});
