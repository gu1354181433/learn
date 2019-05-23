import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../http/http.service"
@Component({
  selector   : 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls  : ['./account-add.component.scss']
})
export class AccountAddComponent implements OnInit {
  id       : any;
  paramName: any;
  user     : any;
  userName : any;
  password : any;
  roleName : any='管理员';
  roleData : any=['最高管理员','管理员'];
  roleId   : any;
  hide     : any=false;
  param    : any;
  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient, private addHttp: HttpService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    if(this.id){
      this.addHttp.accountDetail(this.id).subscribe(
        (Data:any) => {
          this.user     = Data.data;
          this.userName = this.user.author;
          this.password = 'xxxxxx';
          this.hide     = true;
          console.log(this.user);
        }
      )
    }
  }
  cancel(){
    this.router.navigate(['./home/account']);
  }
  save(){
    if(this.roleName=='最高管理员'){
      this.roleId = 1;
    }
    else{
      this.roleId = 2;
    }
    this.param={
      username : this.userName,
      password : this.password,
      password2: this.password,
      roleId   : this.roleId
    }
    this.addHttp.accountAdd(this.param).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }
}
