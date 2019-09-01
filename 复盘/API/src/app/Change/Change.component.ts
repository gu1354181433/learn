import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, Route } from '@angular/router';
import { HttpService } from '../services/http/http.service'
import { response } from '../services/common/common.namespec';
import { CommonService } from '../services/common/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'Change',
  templateUrl: './Change.component.html',
  styleUrls: ['./Change.component.scss']
})

export class ChangeComponent implements OnInit {
  constructor(
    private http: HttpService,
    private commonService: CommonService,
    private  router: Router ,
    private cookieService: CookieService,
    ) {}
  params = {
    mobile:'',
    type:'changeBinding',
  }
  twoCode={
    mobile:'',
    verify:'',
  }
  newMobile={
    mobile:'',
    type:'changeBinding'
  }
  newTwoCode = {
    verifyOld:'',
    verifyNew:'',
    mobileNew:''
  }
  show = false
  error = false
  twoError:string
  class=false
  text = '如无法自主修改，请联系客服帮您解决'
  test= "短信验证"
  testTwo="短信验证"
  dateTime = 60
  three:string
  //首次获取验证码
  code(){
    let re = /^1\d{10}$/
    if(!re.test(this.params.mobile)){
      this.text = '请输入正确的手机号'
      return
    }
    this.http.voteCode(this.params).subscribe((resp:response)=>{
      if(resp.code == 0 ){
         let time = setInterval(() =>{
          this.test = this.dateTime-- +''
          this.class=true
          if(this.dateTime == 0){
            this.test = '短信验证'
            this.dateTime = 60;
            this.class=false
            clearInterval(time)
            return
          }
          },1000)
      }
  })
  }
  //新手机获取验证码
  newCode(){
    console.log(this.newMobile.mobile)
    let re = /^1\d{10}$/
    if(!re.test(this.newMobile.mobile)){
      this.error = true
      return
    }
    this.http.voteCode(this.newMobile).subscribe((resp:response)=>{
      if(resp.code == 0 ){
        let time = setInterval(() =>{
          this.testTwo = this.dateTime-- +''
          this.class=true
          if(this.dateTime == 0){
            this.testTwo = '短信验证'
            this.dateTime = 60
            this.class=false
            clearInterval(time)
            return
          }
          },1000)
      }
  })
  }
  //第一次提交验证码是否正确
  subm(){
    this.twoCode.mobile = this.params.mobile
    this.http.changeBinding(this.twoCode.verify,this.params.mobile).subscribe((resp:response)=>{
      if(resp.code == 0 ){
        this.show = true
      }else{
        this.twoError = resp.message
      }
  })
  }
  //第二次提交更换完成
  twoSubm(){
    this.newTwoCode.verifyOld = this.twoCode.verify
    this.newTwoCode.mobileNew = this.newMobile.mobile
    this.http.putMobile(this.newTwoCode).subscribe((resp:response)=>{
      if(resp.code == 0 ){
        this.commonService.confirm('success', '提示',   '3秒后自动跳转至登录页', () => false , () => {
          setTimeout(() => {
            this.cookieService.delete("isLogin");
        this.router.navigate(['login', '1']).then(() => {
          window.location.reload();
        });
          }, 3000);
        });
        
      }else{
        this.three = resp.message
      }
  })
  }
    ngOnInit(): void {
     
    }
}