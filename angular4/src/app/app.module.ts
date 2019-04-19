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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ AddComponent } from './add.component';
import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageUploadModule } from 'angular2-image-upload';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    MainPartComponent,
    LoginComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ImageUploadModule.forRoot(),
    FileUploadModule
  ],
   providers: [CookieService],
   bootstrap: [AppComponent]
})
export class AppModule { }
