import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class LoggerService {

  constructor(private http: HttpService) { }
  debug(message: string) {
    console.log('阿里云DEBUG日志' + message);
  }
}
