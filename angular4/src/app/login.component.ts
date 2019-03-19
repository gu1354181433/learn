import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent {

  public hero      : any;
         heroes    : any;
         dataSource: any;
         product   : any;
  constructor(private router:Router,private http:HttpClient){
  }
  getData(){
    this.dataSource = this.http.request('post','/mail/a/login',{params: this.hero, headers: headers});
  }
  fuck(value:string,pv:string){
    if(value==''|| pv==''){
      alert('账号密码不能为空')
    }
    else{
      this.hero = {
        name: value,
        pwd : pv
      }
      this.getData();
      this.dataSource
        .subscribe(data =>
        {
          this.product = data;
          console.log(this.product)
          if(this.product.message=='success'){
            this.router.navigate(['main-part'])
          }
          else{
            alert('密码错误')
          }
        }
        );
    }


  }
  }
















