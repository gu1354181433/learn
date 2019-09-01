import { Component, OnInit } from '@angular/core';
import {response} from '../services/common/common.namespec';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../services/http/http.service';
import {CommonService} from '../services/common/common.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {CookieService} from 'ngx-cookie-service';
import {Login} from '../login/login.module';





@Component({
  selector: 'app-find-pwd',
  templateUrl: './find-pwd.component.html',
  styleUrls: ['./find-pwd.component.scss']
})
export class FindPwdComponent implements OnInit {

  validateForm: FormGroup;
  isLoadingOne = false;
  radioValue: any;
  type: string;
  isVote = false;
  RevalidateForm: FormGroup;
  voteInfo: string;
  countdown = 60;
  mobileForNewPwd: string;
  voteForNewPwd: string;
  findStep = 1;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private commonService: CommonService,
    private  router: Router ,
    private ls: LocalStorageService,
    private cookieService: CookieService,
    public login: Login,
    private route: ActivatedRoute,
  ) {
  }



  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    // this.loginIn();
  }

  register () {
    console.log(this.RevalidateForm.value);
    this.http.findBackPwd(this.RevalidateForm.value.vote, this.RevalidateForm.value.registerMobile).subscribe( (res: response) => {
      if (res.code === 0) {
        this.commonService.confirm('success', '提示',   '验证码正确', () => false , () => {
          this.mobileForNewPwd = this.RevalidateForm.value.registerMobile;
          this.voteForNewPwd = this.RevalidateForm.value.vote;
          this.findStep = 2;
          // setTimeout(() => {
          //   this.router.navigate(['login', '1']).then(() => {
          //     window.location.reload();
          //   });
          // }, 1000);
        });
      } else {
        this.commonService.messageProp('error', res.message);
      }
    } );
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



  votemsg () {
    if (this.RevalidateForm.value.registerMobile && this.RevalidateForm.value.registerMobile.length !== 11 ) {
      this.commonService.messageProp('error', '手机号错误,请检查');
    } else {
      this.http.voteCode({mobile: this.RevalidateForm.value.registerMobile, type: 'password'}).subscribe( (res: response) => {
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
  ngOnInit(): void {
    this.voteInfo = '获取验证码';
    this.RevalidateForm = this.fb.group({
      vote: [ null, [ Validators.required  ]  ],
      registerMobile: [ null, [ Validators.required  ]  ]
    });

    this.validateForm = this.fb.group({
      // userName: [ null, [ Validators.required  ]  ],
      // password: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      registerPwd: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      againPwd: [ null, [ Validators.required, Validators.minLength(6)  ]   ]
    });



    this.radioValue = this.login.BTNLOGIN;
    this.route.params.subscribe(res => {
      console.log(res);
      this.type = res.type;

      if (this.type === '1') {
        this.radioValue = this.login.BTNLOGIN;
      } else {
        this.radioValue = this.login.BTNREGISTER;
      }

      // 数据初始化
      // reInitData()
    });

    console.log(this.type);




  }


  loginIn () {
    console.log(this.validateForm.value);
    const obj = {
      verify: this.voteForNewPwd,
      mobile: this.mobileForNewPwd,
      newPwd: this.validateForm.value.registerPwd
    };
    const reg = /^([\d]|[\w]){6,16}$/;
    console.log(this.validateForm.value.registerPwd);
    const pwdIsOK = reg.test(this.validateForm.value.registerPwd);
    if (!pwdIsOK) {
      this.commonService.messageProp('error', '请输入由数字、字母、下划线组成的6-16位密码');
    } else {
      if (this.validateForm.value.registerPwd !== this.validateForm.value.againPwd) {
        this.commonService.messageProp('error', '两次输入密码不一致，请检查！');
      } else {
        this.http.changePwd(obj).subscribe((res: response) => {
          if (res.code === 0) {
            this.commonService.confirm('success', '提示', '修改密码成功', () => false, () => {
              this.findStep = 3;
              // this.cookieService.set('isLogin', 'true', 1);

              // setTimeout(() => {
              //   this.router.navigate(['home']).then(() => {
              //     window.location.reload();
              //   });
              // }, 1000);
            });
          } else {
            this.commonService.messageProp('error', res.message);
          }
        });
      }
    }
  }


  mainReload() {

  }







}

