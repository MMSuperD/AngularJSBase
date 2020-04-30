import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title:string = "我是一个大树";
  content:string|any = "我是一个apple tree I am likly very much";
  html_content:string|any = "<h3>我是需要被解析的html代码</h3>"
  user:object|any = {
    name:"fan",
    age:18
  };
  cars:Array<any> = [
    {
      name:"宝马",
      version:[
        {
          title:"宝马X1",
          price:"20万"
        },
        {
          title:"宝马X2",
          price:"25万"
        },
        {
          title:"宝马X3",
          price:"30万"
        }
      ]
    },
    {
      name:"奥迪",
      version:[
        {
          title:"奥迪X1",
          price:"20万"
        },
        {
          title:"奥迪X2",
          price:"25万"
        },
        {
          title:"奥迪X3",
          price:"30万"
        }
      ]
    }
  ];
  listArray:Array<string> = ["111","222","5678"];
  imgUrl:string = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg";
  flag:boolean = true;
  switchFlag:number = 2;
  styleValue:string = "purple";
  today:any = Date();
  keyword:any|string = "这个是默认值";
  constructor() {
    this.title = "这是我通过构造函数 更新的树"
   }

  ngOnInit(): void {
  }

  run():void {

    alert("执行了");
  }

  getData():void {

    alert(this.title);
  }

  changeData(): void{
    this.title = "我是改变后的数据"
  }

  keyDown(e): void {

    if(e.keyCode == 13){
      console.log("回车了一哈");
    } else {
      console.log(e.target.value);
    }
    
  }

  keyUp(e): void {
    console.log(e.target.value);
  }

  modifyDefault():void {
    this.keyword = "I am very well";
  }

}
