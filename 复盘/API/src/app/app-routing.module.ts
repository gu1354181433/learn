import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
// {path: 'main', component:  MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
