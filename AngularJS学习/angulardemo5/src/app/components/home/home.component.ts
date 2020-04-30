import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { HttpservertoolsService } from "../../services/httpservertools.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list:any[] = [];
  public domain:string;
  constructor(public httpTools:HttpservertoolsService) { 
    this.domain = this.httpTools.domain;
  }

  ngOnInit(): void {

    // 这里我们需要请求数据
    this.requestData();
  }

  requestData():void{

    let api:string = "api/productlist";


    this.httpTools.get(api).then((data:any)=>{
      console.log(data);
      this.list = data.result;
    });

  }

}
