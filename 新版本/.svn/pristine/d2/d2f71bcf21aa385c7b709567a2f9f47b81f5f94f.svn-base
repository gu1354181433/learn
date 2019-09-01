import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public http:HttpClient,public router:Router,private fb: FormBuilder,){}
  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null],
      password: [null],
    });
  }
  public user:any = {
    username:"",
    password:"", 
  }
  public explain:any="" 
  validateForm: FormGroup;
  submit(){
    if (!this.user.username||!this.user.password) {
      this.explain = '账户或密码错误请查正后输入'
      } 
    // else if (this.user.uesrname=='@#￥%') {
    //   alert("请不要输入特殊字符!");
    // }
    else {
      console.log(this.user)
      this.http.post("/api/a/login",null,{params:this.user}).subscribe((response:any)=>{
        console.log(response);
        // if (response.code===-5003 || response.code===-5004) {
        //   this.explain = '账户或密码错误请查正后输入'
        // }
        // else {
        //   this.router.navigateByUrl("home");
        // }
      })
    } 
  }



}
