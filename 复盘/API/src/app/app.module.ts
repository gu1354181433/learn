import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS, zh_CN} from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { personalComponent } from './personal/personal.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { MainModule } from './main/main.module';
import { activityComponent } from './activitys/activitys.component';
import { newsDetailComponent } from './main/newsDetail/newsDetail.component';
import { CookieService } from 'ngx-cookie-service';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ChangeComponent } from './Change/Change.component';
import { FindPwdComponent } from './find-pwd/find-pwd.component';
import { HowComponent } from './resourse/component/how/how.component';
import { TestItemComponent } from './resourse/component/test-item/test-item.component';
import { ExampleComponent } from './resourse/component/example/example.component';
import { ExampleDetailComponent } from './resourse/component/example-detail/example-detail.component';
// import { CommonValidatorDirective } from './resourse/validator/common-validator.directive';
import {ScientificComponent} from './resourse/component/scientific/scientific.component';
import { ShopListComponent } from './resourse/component/shop-list/shop-list.component';
import { ShopDetailComponent } from './resourse/component/shop-detail/shop-detail.component';
import { TestingDetailComponent } from './resourse/component/test-item/testing-detail/testing-detail.component';
import { SearchListComponent } from './resourse/search/search-list/search-list.component';
import { AgreementComponent } from './resourse/component/agreement/agreement.component';
import { Demo11Component } from './demo11/demo11.component';
// import { NComponent } from './n/n.component';
import { ReportListComponent } from './resourse/component/test-report/report-list/report-list.component';
import { TestreportComponent } from './resourse/component/test-report/testreport/testreport.component';
import { ReportDetailComponent } from './resourse/component/test-report/report-detail/report-detail.component';
import {WxLoginComponent} from './resourse/component/wx-login/wx-login.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FindPwdComponent,
    personalComponent,
    HowComponent,
    activityComponent,
    TestItemComponent,
    ExampleComponent,
    ExampleDetailComponent,
    ScientificComponent,
    TestingDetailComponent,
    ScientificComponent,
    ShopListComponent,
    ShopDetailComponent,
    ChangeComponent,
    SearchListComponent,
    newsDetailComponent,
    ReportListComponent,
    TestreportComponent,
    ReportDetailComponent,
    newsDetailComponent,
    AgreementComponent,
    Demo11Component,
    WxLoginComponent
    // NComponent
    // CommonValidatorDirective,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN  },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_ICONS, useValue: icons },
    CookieService ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }



// @NgModule({
//   imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdModule, BrowserAnimationsModule ],
//   declarations: [ NzDemoLayoutSideComponent ],
//   bootstrap:    [ NzDemoLayoutSideComponent ],
//   providers   : [ { provide: NZ_I18N, useValue: en_US } ]
// })
