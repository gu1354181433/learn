import { WeChatShareService } from './we-chat-share.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { VideoComponent } from './video/video.component';
import { CollapseComponent } from './collapse/collapse.component';
import { AddComponent } from './add/add.component';
import { AccountComponent } from './account/account.component';
import { HttpService } from './HTTP/http.service';
import { AccountAddComponent } from './account-add/account-add.component';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    CollapseComponent,
    AddComponent,
    AccountComponent,
    AccountAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [WeChatShareService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
