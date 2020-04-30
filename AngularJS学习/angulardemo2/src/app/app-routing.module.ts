import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 导入组件模块
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './components/about/about.component';
import { MineComponent } from './components/mine/mine.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"shop",
    component:ShopComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"mine",
    component:MineComponent
  },
  {
    path:"detail", // 这个是用来get 传值的
    component:DetailComponent
  },
  {
    path:"detail/:aid", // 这个是用来动态传值的
    component:DetailComponent
  },
  {
    path:"**",
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
