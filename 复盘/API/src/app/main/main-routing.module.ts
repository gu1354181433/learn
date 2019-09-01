import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminGuard } from '../guard/admin/admin.guard';
import { AdminChildGuard } from '../guard/admin/admin-child.guard';
import { LoginComponent } from '../login/login.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { newsDetailComponent } from './newsDetail/newsDetail.component';
import { personalComponent } from '../personal/personal.component';
import { ChangeComponent } from '../Change/Change.component';
import { activityComponent } from '../activitys/activitys.component';
import { FindPwdComponent } from '../find-pwd/find-pwd.component';
import {HowComponent} from '../resourse/component/how/how.component';
import {TestItemComponent} from '../resourse/component/test-item/test-item.component';
import {ExampleComponent} from '../resourse/component/example/example.component';
import {ExampleDetailComponent} from '../resourse/component/example-detail/example-detail.component';
import {ScientificComponent} from '../resourse/component/scientific/scientific.component';
import {TestingDetailComponent} from '../resourse/component/test-item/testing-detail/testing-detail.component';
import {ShopListComponent} from '../resourse/component/shop-list/shop-list.component';
import {ShopDetailComponent} from '../resourse/component/shop-detail/shop-detail.component';
import {BindingGeneComponent} from '../main/introduction/binding-gene/binding-gene.component'
import {SearchListComponent} from '../resourse/search/search-list/search-list.component';
import {AgreementComponent} from '../resourse/component/agreement/agreement.component';
import {Demo11Component} from '../demo11/demo11.component';
// import {NComponent} from '../n/n.component';
import {ReportListComponent} from '../resourse/component/test-report/report-list/report-list.component';
import {TestreportComponent} from '../resourse/component/test-report/testreport/testreport.component';
import {ReportDetailComponent} from '../resourse/component/test-report/report-detail/report-detail.component'
import {WxLoginComponent} from '../resourse/component/wx-login/wx-login.component';


const routes: Routes = [ 
  {
    path: '',
    component: MainComponent,
    canActivate: [AdminGuard ],
    // canActivateChild : [AdminChildGuard],
    children: [
      {
        path: 'home/:qw',
        component: WelcomeComponent,
      },
      {
        path: 'login/:type',
        component: LoginComponent,
      },
      {
        path: 'introduction',
        component: IntroductionComponent,
      },
       // 个人信息
       {
        path: 'personal',
        component: personalComponent,
      },
    
      { path: 'find-pwd', component: FindPwdComponent},
      { path: 'how', component: HowComponent},
      { path: 'items', component: TestItemComponent},
      { path: 'TestingDet/:id',component:TestingDetailComponent},
      { path: 'example', component: ExampleComponent},
      { path: 'example/list', component: ExampleDetailComponent},
      { path: 'shop', component: ShopListComponent},
      { path: 'shop/detail/:id', component: ShopDetailComponent},
      { path: 'ChangeComponent', component: ChangeComponent},
      // 搜索列表
      { path: 'search/:val', component: SearchListComponent},
      { path: 'newsDetail/:id', component: newsDetailComponent},
      { path: 'personalAgree', component: AgreementComponent},
      { path: 'wxLogin', component: WxLoginComponent},
      // { path: 'demo', component: NComponent},


      //我的基因盒
      { path: 'scientific',component: ScientificComponent},
      //绑定基因盒
      { path: 'bindingGene',component: BindingGeneComponent},
      //活动列表
      { path: 'dactivity',component: activityComponent},
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      //报告分类列表
      { path: 'testreport/:id',component:TestreportComponent},
      //报告分类详情
      { path: 'reportLi/list',component:ReportListComponent},
      //分类详情
      { path: 'reportDetail/list',component:ReportDetailComponent},



      { path: '**', component: WelcomeComponent }
    //   {
    //     path: 'module',
    //     component: ModuleComponent,
    //   },
    //   {
    //     path: 'role/:page/:size',
    //     component: RoleComponent,
    //   },
    //   {
    //     path: 'pwd',
    //     component: PwdComponent,
    //   },
    //   {
    //     path: 'manager/:page/:size',
    //     component: ManagerComponent,
    //   },


    ]

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
