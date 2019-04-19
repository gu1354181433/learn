import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {


public hero      : any;
       heroes    : any;
       dataSource: any;
       product   : any;
       users     : string='';
  constructor(private router:Router,private http:HttpClient,private cookieService: CookieService){
  }
  ngOnInit(): void {
    if(this.cookieService.get("www.zonzii.com")){
      this.router.navigate(['/main-part/home']);
    }
  }

  getData(){
    this.dataSource = this.http.request('post','/mail/a/login',{params: this.hero, headers: headers});
  }
  change(value:string){
    console.log(value)
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
      console.log(this.hero)
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
















