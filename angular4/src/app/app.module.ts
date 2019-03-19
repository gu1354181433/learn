import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article.component';
import { HomeComponent } from './home.component';
import { MainPartComponent } from './main-part.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    MainPartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
