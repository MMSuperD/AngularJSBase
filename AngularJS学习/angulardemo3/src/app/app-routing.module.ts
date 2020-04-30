import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './components/shop/shop.component';
  import { ShopFirstComponent } from './components/shop/shop-first/shop-first.component';
  import { ShopSecoundComponent } from './components/shop/shop-secound/shop-secound.component';
import { NewsComponent } from './components/news/news.component';
  import { FirstComponent } from './components/news/first/first.component';
  import { SecoundComponent } from './components/news/secound/secound.component';
import { StudyComponent } from './components/study/study.component';
  import { StudyFirstComponent } from './components/study/study-first/study-first.component';
  import { StudySecoundComponent } from './components/study/study-secound/study-secound.component';


const routes: Routes = [
  {
    path:"shop",
    component:ShopComponent,
    children:[
      {
        path:"shopFirst",
        component:ShopFirstComponent
      },
      {
        path:"shopSecound",
        component:ShopSecoundComponent
      },
      {
        path:'**',
        redirectTo:'shopFirst'
      }
    ]
    
  },
  {
    path:"news",
    component:NewsComponent,
    children:[
      {
        path:"first",
        component:FirstComponent
      },
      {
        path:"secound",
        component:SecoundComponent
      },
      {
        path:'**',
        redirectTo:'first'
      }
    ]
  },
  {
    path:"study",
    component:StudyComponent,
    children:[
      {
        path:"studyFirst",
        component:StudyFirstComponent
      },
      {
        path:"studySecound",
        component:StudySecoundComponent
      },
      {
        path:'**',
        redirectTo:'studyFirst'
      }
    ]
    
  },
  {
    path:"news",
    component:NewsComponent,
    children:[
      {
        path:"first",
        component:FirstComponent
      },
      {
        path:"secound",
        component:SecoundComponent
      },
      {
        path:'**',
        redirectTo:'first'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'news'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
