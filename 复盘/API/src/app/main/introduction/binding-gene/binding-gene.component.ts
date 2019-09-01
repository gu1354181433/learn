import { Component, OnInit,TemplateRef } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, Route } from '@angular/router';
import { HttpService } from '../../../services/http/http.service'
import { response } from '../../../services/common/common.namespec';
import { CommonService } from '../../../services/common/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-binding-gene',
  templateUrl: './binding-gene.component.html',
  styleUrls: ['./binding-gene.component.scss']
})
export class BindingGeneComponent implements OnInit {
  validateForm: FormGroup;
  tplModal: NzModalRef;
  private geneDate = {
    serial: '',
    errorMes:''
  }
  paramsDtate:{serial:string;errorMes:string}
  constructor(private fb: FormBuilder, private route: Router, private http: HttpService, private commonService: CommonService,private modalService: NzModalService,) { }
  //  我的基因盒-绑定基因盒
  postBinding(): void{
    this.geneDate.serial = this.geneDate.serial.toString();
    if(this.geneDate.serial.length > 9){
      this.geneDate.serial = this.geneDate.serial.slice(0,10);
    }
    this.http.postBinding(this.geneDate).subscribe((resp: response) => {
      if (resp.code == 0) {
        this.commonService.messageProp('success', "绑定成功,返回个人中心");
        this.route.navigate(['personal'], {}).then(() => {
          window.location.reload();
        });
      } else {
        this.commonService.messageProp('error', resp.message);
        this.paramsDtate.errorMes = resp.message;
      }
    })
  }
  //弹窗
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzClassName: 'agreeModel',
      nzWidth:800,
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }
  destroyTplModal(): void {
    this.validateForm.controls['agree'].setValue(false)
    this.tplModal.destroy();
  }

  EnterTplModal(): void {
    this.validateForm.controls['agree'].setValue(true)
    this.tplModal.destroy();
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      serial: [null, [Validators.required]],
      agree: [null, [Validators.required]],
      errorMes:[null]
    });
    this.paramsDtate = this.geneDate;
  }
  }
