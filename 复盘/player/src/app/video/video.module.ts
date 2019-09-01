import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule } from '@angular/forms';
import { BestComponent } from './best/best.component';
import { LanguageComponent } from './language/language.component';
import { MathComponent } from './math/math.component';
import { EnglishComponent } from './english/english.component';
@NgModule({
  declarations: [
    VideoComponent,
    BestComponent,
    LanguageComponent,
    MathComponent,
    EnglishComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    NgZorroAntdMobileModule,
    FormsModule
  ]
})
export class VideoModule { }
