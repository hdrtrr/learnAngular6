import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  // 测试方法
  testMethod() {
    console.log('this is HeroService testMethod');
  }
}
