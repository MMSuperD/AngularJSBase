import { Component, OnInit } from '@angular/core';

// 这个是获取 url get 传值必须要引入的组件
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getUrlParamsValue();

    this.getUrlHValue();

  }

  // 获取 get 方式 url 传值
  getUrlParamsValue():void{
    
    console.log(this.route.queryParams);

    this.route.queryParams.subscribe((data)=>{

      console.log(data.aid);
      console.log(data.usename);

    });

  }

     // 获取 动态路由传过来的值
  getUrlHValue():void{
    
    console.log(this.route.params);

    this.route.params.subscribe((data)=>{

      console.log(data);
    });
  }

}
