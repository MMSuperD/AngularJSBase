import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  // 接收父组件传过来的属性
  @Input() title:any

  @Input() msg:string

  // 父组件传过来的方法
  @Input()  run:any

  // 整个父组件
  @Input() childcontent:any

  //  output 传值
  @Output() private outer = new EventEmitter<string>();


  childMsg:string = "我是导航子组件属性"



  constructor() { }

  ngOnInit(): void {
  }

  getParentMsg():void{

    console.log("这个是通过整个组件传过来的" + this.childcontent.msg);
    alert(this.msg);
  }

  getParentWay():void{
    this.run();
  }

  getWay():void{
    alert("我是导航子组件的方法");
  }

  /*
  * output 方法传值
  */
  sendParentMsg():void{
      console.log("我是子组件的数据");
      this.outer.emit("我是子组件的数据");
  }

}
