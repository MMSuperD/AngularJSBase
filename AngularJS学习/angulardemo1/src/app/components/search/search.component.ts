import { Component, OnInit } from '@angular/core';

// 为了保存数据我们创建了服务 需要导入服务
import { StorageService } from "../../services/storage.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyword:string = "";
  search_list:Array<any> = [];

  /*
  * storage: 这个是我们使用服务的推荐写法
  */
  constructor(public storage:StorageService) { 


  }

  /*
  * 这个方法每次刷新界面都会访问这个方法
  */
  ngOnInit(): void {
    console.log("ngOnInit");

    let search_list:any = this.storage.getData("search_list");
    if (search_list) {
        this.search_list = search_list;
    }

  }
  /*
  * 添加数据
  */
  search_input_keyup(e): void {
    
    if(e.keyCode === 13){
      
      if (this.keyword.length == 0) {
          return;
      }

      if (this.isHaveKeyword()) {
        alert("已经存在:" + this.keyword);
        return;
      }
    
      this.search_list.push({
        title:this.keyword,
        statu:true
      });
      this.keyword = "";

      // 保存数据
      this.storage.setData("search_list",this.search_list);
    }
  }

  /*
  * 删除数据
  */
  delete_data(index:number):void{
    this.search_list.splice(index,1);
    // 保存数据
    this.storage.setData("search_list",this.search_list);
  }

  /*
  * CheckBox 事件的点击
  */
  checkboxClick(e):void{
    console.log("CheckBox 事件的点击");
    // 保存数据
    this.storage.setData("search_list",this.search_list);
  }

  /*
  * 判断数据是否存在于数组中
  */
  isHaveKeyword():boolean{

    for (let index = 0; index < this.search_list.length; index++) {
      const element = this.search_list[index];
      if (element.title === this.keyword) {
        return true;
      }
    }
    return false;
  }

}
