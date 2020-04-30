import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';


// 为了保存数据我们创建了服务 需要导入服务
import { StorageService } from "./services/storage.service";
import { HomeComponent } from './components/home/home.component';
import { TransitionComponent } from './components/transition/transition.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { ChildcontentComponent } from './components/childcontent/childcontent.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    FormComponent,
    SearchComponent,
    HomeComponent,
    TransitionComponent,
    NavigatorComponent,
    ChildcontentComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
