import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { NewsComponent } from './components/news/news.component';
import { StudyComponent } from './components/study/study.component';
import { FirstComponent } from './components/news/first/first.component';
import { SecoundComponent } from './components/news/secound/secound.component';
import { StudyFirstComponent } from './components/study/study-first/study-first.component';
import { StudySecoundComponent } from './components/study/study-secound/study-secound.component';
import { ShopFirstComponent } from './components/shop/shop-first/shop-first.component';
import { ShopSecoundComponent } from './components/shop/shop-secound/shop-secound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    NewsComponent,
    StudyComponent,
    FirstComponent,
    SecoundComponent,
    StudyFirstComponent,
    StudySecoundComponent,
    ShopFirstComponent,
    ShopSecoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
