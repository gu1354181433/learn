import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AddComponent } from './add/add.component';
import { AccountComponent } from './account/account.component';
import { AccountAddComponent } from './account-add/account-add.component';

const routes: Routes = [
  {
    path     : 'home',
    component: HomeComponent,
    children : [
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
      }

    ]
  },
  {
    path      : '',
    redirectTo: '/home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
