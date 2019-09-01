import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DetailComponent],
  imports     : [
    CommonModule,
    DetailRoutingModule,
    FormsModule,
    NgZorroAntdMobileModule
  ]
})
export class DetailModule { }
