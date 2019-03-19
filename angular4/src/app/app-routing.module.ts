import { LoginComponent } from './login.component';
import { MainPartComponent } from './main-part.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ArticleComponent } from './article.component';
const routes: Routes = [

  // {
  //   path: '', redirectTo: '/home', pathMatch: 'full'
  // }
  {
    path     : 'main-part',
    component: MainPartComponent,
    children : [
      {
        path      : '',
        redirectTo: 'home',
        pathMatch : 'full'
      },
      {
      path     : 'article',
      component: ArticleComponent,
    },
    {
      path     : 'home',
      component: HomeComponent
    }

  ]
  },
  {
    path     : 'login',
    component: LoginComponent,
  },
  {
    path      : '',
    redirectTo: '/login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
