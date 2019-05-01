import { Injectable } from '@angular/core';
import {EMPLOYEE_LIST, Employee} from './Employee';

@Injectable({
  providedIn: 'root'
})
export class AbcdService {

  constructor() { }
  employeeList: Array<Employee> = EMPLOYEE_LIST;
}
