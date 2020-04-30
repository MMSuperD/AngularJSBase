import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user:any = {
    username:"",
    sex:"1",
    city:"上海",
    favorite_list:[
      {
        name:"睡觉",
        selected:false
      },
      {
        name:"打球",
        selected:true
      },
      {
        name:"写代码",
        selected:false
      },
      {
        name:"看书",
        selected:false
      }
    ],
    mark:"I am a handsome boy"
  };

  city_list:Array<string> = ["上海","北京","广州","成都"];
  favorite_list:Array<string> = ["睡觉","打球","写代码","看书"];
  constructor() { }

  ngOnInit(): void {
  }

  /*
  * 这里是表单提交数据
  */
  submit(): void {

    console.log(this.user);
  }

}
