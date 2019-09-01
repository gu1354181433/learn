import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {LocalStorageService} from '../../../services/local-storage/local-storage.service';
import {CommonService} from '../../../services/common/common.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {response} from '../../../services/common/common.namespec';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-wx-login',
  templateUrl: './wx-login.component.html',
  styleUrls: ['./wx-login.component.scss']
})
export class WxLoginComponent implements OnInit {
   opId: any;
  RevalidateForm: FormGroup;
   voteInfo: string;
  countdown = 60;
  tplModal: NzModalRef;
  isVote: boolean;
   mobileForNewPwd: any;
   voteForNewPwd: any

  constructor(private http: HttpService,
              private ls: LocalStorageService,
              private commonService: CommonService,
              private navBarService: NavbarService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private modalService: NzModalService,
              private cookieService: CookieService ,
              private router: Router, ) { }


  register () {
    console.log(this.RevalidateForm.value);
    const obj = {
      mobile: this.RevalidateForm.value.registerMobile,
      pwd: this.RevalidateForm.value.registerPwd,
      verify: this.RevalidateForm.value.vote,
      openId: this.opId
    };
    const reg = /^([\d]|[\w]){6,16}$/ ;
    console.log(this.RevalidateForm.value.registerPwd);
    const pwdIsOK = reg.test(this.RevalidateForm.value.registerPwd);

    if (!pwdIsOK) {
      this.commonService.messageProp('error', '请输入由数字、字母、下划线组成的6-16位密码');
    } else {
      if (this.RevalidateForm.value.registerPwd !== this.RevalidateForm.value.againPwd) {
        this.commonService.messageProp('error', '两次输入密码不一致，请检查！');
      } else {
        this.http.wxRegister(obj).subscribe( (res: response) => {
          if (res.code === 0) {
            this.cookieService.set('isLogin', 'true', 1);
            this.commonService.confirm('success', '提示',   '注册成功', () => false , () => {
              setTimeout(() => {
                this.router.navigate(['home' ]).then(() => {
                  this.cookieService.set('isLogin', 'true', 15);
                  window.location.reload();
                });
              }, 1000);
            });
          } else {
            this.commonService.messageProp('error', res.message);
          }
        } );
      }
    }











  }


  mobileValidate = function (name, form) {
    let  validateValue = form.value[name];


    //  把非数字的都替换掉，除了数字和.
    validateValue = validateValue.replace(/[^\d]/g, '');
    //  必须保证第一个为数字而不是.
    validateValue = validateValue.replace(/^\./g, '');
    //  保证只有出现一个.而没有多个.
    validateValue = validateValue.replace(/\.{2,}/g, '');
    //  保证.只出现一次，而不能出现两次以上
    validateValue = validateValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');

    form.get(name).setValue(validateValue);

  };


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
  votemsg () {
    if (this.RevalidateForm.value.registerMobile && this.RevalidateForm.value.registerMobile.length !== 11 ) {
      this.commonService.messageProp('error', '手机号错误,请检查');
    } else {
      this.http.voteCode({mobile: this.RevalidateForm.value.registerMobile, type: 'wxBinding'}).subscribe( (res: response) => {
        if (res.code === 0) {
          this.commonService.messageProp('success', '发送成功');

          const start =  setInterval(() => {
            if (this.countdown  == 0) {
              this.isVote = false;
              this.voteInfo = '短信验证';
              clearInterval(start);
              this.countdown = 60;
            } else {
              this.countdown --;
              this.isVote = true;
              this.voteInfo = `${this.countdown}秒后重新发送`;
            }
          }, 1000 );

        } else {
          this.commonService.messageProp('error', res.message);
        }
      } );
    }
  }

  destroyTplModal(): void {
    this.RevalidateForm.controls['agree'].setValue(false)
    this.tplModal.destroy();
  }

  EnterTplModal(): void {
    this.RevalidateForm.controls['agree'].setValue(true)
    this.tplModal.destroy();
  }


  ngOnInit() {
    this.voteInfo = '获取验证码';
    this.RevalidateForm = this.fb.group({
      registerMobile: [ null, [ Validators.required  ]  ],
      vote: [ null, [ Validators.required  ]  ],
      registerPwd: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      againPwd: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      agree: [ null, [ Validators.required  ]   ],
    });

    console.log(this.RevalidateForm)




    this.route.queryParams.subscribe(res => {
      this.http.getUserInfoByWx ({code: res['code']}).subscribe((res: response) => {
        if (res.code == 0) {
          this.opId = res.data['openid'];
          if (res.data['token']) {
            this.cookieService.set('isLogin', 'true', 1);
            setTimeout(() => {
              this.router.navigate(['home' ]).then(() => {
                window.location.reload();
              });
            }, 1000);

          } else {
            console.log('未注册');
          }



        } else {
          this.commonService.messageProp('error', res.message);
        }
      });



    });





  }

}
