import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  show_list:Array<any> = [
    {
      id:1,
      name:"方便面",
      detail:"我非常好吃"
    },
    {
      id:2,
      name:"苹果",
      detail:"我非常好吃"
    },
    {
      id:3,
      name:"梨",
      detail:"我非常好吃"
    },
    {
      id:4,
      name:"荔枝",
      detail:"我非常好吃"
    }
  ];
  constructor() { }




  ngOnInit(): void {
  }

}
