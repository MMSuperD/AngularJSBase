import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-childcontent',
  templateUrl: './childcontent.component.html',
  styleUrls: ['./childcontent.component.scss']
})
export class ChildcontentComponent implements OnInit {

  title:string = "我是 childcontent 的头";
  msg:string = "I am a handsome body!";

  // 这个是获取子 组件
  @ViewChild("child_nav") child_nav:any
  constructor() { }

  ngOnInit(): void {
  }

  run():void{

    alert("我是父组件的run方法");
  }

  getChildData():void{
    console.log("获取子组件的数据");
    alert(this.child_nav.childMsg);
  }

  getChildWay():void{
    console.log("获取子组件的方法");
    alert(this.child_nav.getWay());
  }

  // 这个是 通过output 方式 来监听子组件的方法
  outpuWayRun():void{
    console.log("通过output广播方式获取子组件的方法");
    alert("通过output广播方式获取子组件的方法");
  }

}
