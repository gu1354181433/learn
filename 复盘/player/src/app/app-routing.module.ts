import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { BestComponent } from './video/best/best.component';
import { LanguageComponent } from './video/language/language.component';
import { DetailComponent } from './video/detail/detail.component';
const routes: Routes = [
  {
    path     : 'video',
    component: VideoComponent,
    children : [
      {
        path     : "best",
        component: BestComponent,
      },
      {
        path     : "language",
        component: LanguageComponent,
      }
    ]
  },
  {
    path     : "detail/:id",
    component: DetailComponent,
  },
  {
    path      : '**',
    redirectTo: 'video',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
