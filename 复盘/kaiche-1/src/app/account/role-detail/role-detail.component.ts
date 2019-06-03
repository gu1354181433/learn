import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../../http/http.service"
@Component({
  selector   : 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls  : ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  id        : any;
  paramName : any;
  user      : any;
  userName  : any;
  inputValue: any;
  roleId    : any;
  hide      : any=false;
  param     : any;
  radioValue: any;
  constructor(private router: Router,private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.roleId    = +this.route.snapshot.params.id;
    this.paramName = this.route.snapshot.queryParams["name"];
    this.http.roleAdd(this.roleId).subscribe(
      (data:any)=>{
        this.user       = data.data.role[0];
        this.userName   = this.user.roleName;
        this.inputValue = this.user.Description;
        this.radioValue = this.user.module;
        console.log(data);
      }
    )
    if(this.paramName){
      this.hide = true;
    }
  }
  cancel(){
    this.router.navigate(['./home/role']);
  }
  save(){
    if(this.userName=='最高管理员'){
      this.roleId = 1;
    }
    else{
      this.roleId = 2;
    }
    this.param={
      roleIDame  : this.userName,
      description: this.inputValue,
      module     : this.radioValue
    }
    this.http.roleSave(this.roleId,this.param).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }
}
