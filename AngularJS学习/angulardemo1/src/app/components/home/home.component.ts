
/*

ViewChild获取dom节点


    1、模板中给dom起一个名字
      <div #myBox>

        我是一个dom节点
      </div>

    2、在业务逻辑里面引入ViewChild

    import { Component, OnInit,ViewChild} from '@angular/core';



    3、 写在类里面    @ViewChild('myBox') myBox:any;

    4、ngAfterViewInit生命周期函数里面获取dom



    this.myBox.nativeElement



*/
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 这是一个元素 都是一样的写法
  @ViewChild("mybox") mybox:any
  // 这是一个组件 都是一样的写法
  @ViewChild("myHeader") myHeader:any
  constructor() { }

  ngOnInit(): void {


  }

  /*
  * 这里可以获取到dom 结点
  */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.jsgetDom();
    this.angularJSViewChildgetDom();

    
  }

  /*
  * 通过原生JS获取dom 结点
  */
  jsgetDom():void{
    let element:any = document.getElementById("thank1");
    element.style.color = "red";
  }

  /*
  * angularJSViewChild结点
  */
 angularJSViewChildgetDom():void{
    console.log(this.mybox);
    this.mybox.nativeElement.style.color = "red";
  }

  getChildWay():void{

    // 调用子组件中的方法
    this.myHeader.run();

  }

}
