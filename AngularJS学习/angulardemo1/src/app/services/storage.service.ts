/*
1、ng g service services/storag

2、app.module.ts 里面引入创建的服务 并且声明

import { StorageService } from './services/storage.service'

providers: [StorageService]



3、在用到的组件里面
      //引入服务
      import { StorageService } from '../../services/storage.service';



      //初始化

      constructor(public storage:StorageService) { 

          let s=this.storage.get();

          console.log(s);
      }


*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setData(key:string,value:any):void{
    localStorage.setItem(key,JSON.stringify(value));
  }

  getData(key:string):void{
    return JSON.parse(localStorage.getItem(key))
  }

  removeData(key:string):void{
    localStorage.removeItem(key);
  }
}
