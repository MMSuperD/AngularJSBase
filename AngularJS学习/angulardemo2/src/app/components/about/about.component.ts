import { Component, OnInit } from '@angular/core';

// 导入路由模块
import { Router,NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  // JS 动态跳转
  jsGoSwich():void{

    this.router.navigate(['/detail','hello']);

  }
  // JS Get 传值 跳转
  jsGoGetSwich():void{

    let navigationExtras:NavigationExtras = {
      queryParams:{
        id:12,
        name:"fan"
      },
      fragment:"ttxs"
    };

    this.router.navigate(["/detail"],navigationExtras);

  }

}
