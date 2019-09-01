import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AddComponent } from './add/add.component';
import { AccountComponent } from './account/account.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ArticleComponent } from './home/article/article.component';
import { ArticleAddComponent } from './home/article-add/article-add.component';
import { RoleComponent } from './account/role/role.component';
import { RoleDetailComponent } from './account/role-detail/role-detail.component';
import { CommentComponent } from './video/comment/comment.component';
import { AddCommentComponent } from './video/add-comment/add-comment.component';
const routes: Routes = [
  {
    path     : 'admin',
    component: AdminComponent
  },
  {
    path     : 'home',
    component: HomeComponent,
    children : [
      {
        path     : "welcome",
        component: WelcomeComponent,
      },
      {
        path     : "article",
        component: ArticleComponent,
      },
      {
        path     : "articleAdd",
        component: ArticleAddComponent,
      },
      {
        path     : 'video',
        component: VideoComponent
      },
      {
        path     : 'add',
        component: AddComponent
      },
      {
        path     : 'add/:id',
        component: AddComponent
      },
      {
        path     : 'account',
        component: AccountComponent
      },
      {
        path     : 'account-add/:id',
        component: AccountAddComponent
      },
      {
        path     : 'account-add',
        component: AccountAddComponent
      },
      {
        path     : 'role',
        component: RoleComponent
      },
      {
        path     : 'role-detail/:id',
        component: RoleDetailComponent
      },
      {
        path     : 'role-detail',
        component: RoleDetailComponent
      },
      {
        path     : 'comment',
        component: CommentComponent
      },
      {
        path     : 'add-comment',
        component: AddCommentComponent
      },
      {
        path     : 'add-comment/:id',
        component: AddCommentComponent
      },
      {
        path      : '**',
        redirectTo: 'welcome',
        pathMatch : 'full'
      }

    ]
  },
  {
    path      : '**',
    redirectTo: 'admin',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
