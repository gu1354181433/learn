import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { BestComponent } from './video/best/best.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { LanguageComponent } from './video/language/language.component';
import { MathComponent } from './video/math/math.component';
import { EnglishComponent } from './video/english/english.component';
import { DetailComponent } from './video/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    BestComponent,
    LanguageComponent,
    MathComponent,
    EnglishComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
