import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo2';
  func_list:Array<any> = [
    {
      "path":"/home",
      "title":"首页"
    },
    {
      "path":"/shop",
      "title":"商品"
    },
    {
      "path":"/about",
      "title":"关于"
    },
    {
      "path":"/mine",
      "title":"我的"
    }
  ];
}
