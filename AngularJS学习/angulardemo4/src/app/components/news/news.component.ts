import { Component, OnInit } from '@angular/core';

import {HttpClient,HttpHeaders} from "@angular/common/http";

import { HttpserviceService } from "../../services/httpservice.service";

import axios from 'axios';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  data:any = "默认数据";

  constructor(public http:HttpClient, public server:HttpserviceService) { }

  ngOnInit(): void {
  }

  getData():void{

    var api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

  postData():void{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      var api = "http://127.0.0.1:3000/doLogin"; 
      this.http.post(
        api,
        {
          username:'张三',
          age:'20'
        },httpOptions).subscribe(response => {
        console.log(response); 
    });

  }

  jsonpData():void{

    var api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api,'callback').subscribe(response => {
      console.log(response);
      this.data = response;
   });

  }

  axiosData():void {

    console.log('axios获取数据');
    let api="http://a.itying.com/api/productlist";

    this.server.axiosGet(api).then((data)=>{

        console.log(data)
    })

    // axios.get('http://a.itying.com/api/productlist') .then(function (response) {
    //   // handle success
    //   console.log(response); })
    //   .catch(function (error) { // handle error console.log(error);
    //   })
    //   .then(function () {
    //   // always executed 
    // });

  }

}
