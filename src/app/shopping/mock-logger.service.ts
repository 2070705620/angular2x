import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {HttpService} from './http.service';

@Injectable()
export class MockLoggerService extends LoggerService {
  debug(message: string) {
    console.log('模拟数据收集' + message);
  }
}
