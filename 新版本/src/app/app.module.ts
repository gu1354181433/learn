import { WeChatShareService } from './we-chat-share.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { VideoComponent } from './video/video.component';
import { CollapseComponent } from './collapse/collapse.component';
import { AddComponent } from './add/add.component';
import { AccountComponent } from './account/account.component';
import { HttpService } from './HTTP/http.service';
import { AccountAddComponent } from './account-add/account-add.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './home/article/article.component';
import { ArticleAddComponent } from './home/article-add/article-add.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { StatePipe } from './state.pipe';
import { RoleComponent } from './account/role/role.component';
import { RoleDetailComponent } from './account/role-detail/role-detail.component';
import { CommentComponent } from './video/comment/comment.component';
import { AddCommentComponent } from './video/add-comment/add-comment.component';
import { CookieService } from 'ngx-cookie-service';

import { UMeditorModule } from 'ngx-umeditor';
registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    CollapseComponent,
    AddComponent,
    AccountComponent,
    AccountAddComponent,
    AdminComponent,
    ArticleComponent,
    ArticleAddComponent,
    WelcomeComponent,
    StatePipe,
    RoleComponent,
    RoleDetailComponent,
    CommentComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    UMeditorModule.forRoot({})
  ],
  providers: [WeChatShareService, { provide: NZ_I18N, useValue: zh_CN },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
