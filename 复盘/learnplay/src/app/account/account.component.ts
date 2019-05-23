import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../http/http.service"
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Component({
  selector   : 'app-account',
  templateUrl: './account.component.html',
  styleUrls  : ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  dateFormat    = 'yyyy/MM/dd';
  statusData    = ['全部', '最高管理员', '管理员'];
  selectDefault = '全部';
  searchParam: any;
  adad       : any;
  roleId     : any;
  listOfData : any=[];
  constructor(private router: Router,private http: HttpService) { }


  ngOnInit() {
    this.http.accountSearch().subscribe(
      (data:any)=>{

        this.listOfData = data.data.user
        console.log(data);
      }
    )
  }
  deleteRow(key: string): void {
    this.listOfData = this.listOfData.filter(d => d.key !== key);
  }
  edit(id: any, word: any) {
    this.router.navigate(['./home/account-add', id])
  }
  add(){
    this.router.navigate(['./home/account-add'])
  }
  search(){
    this.searchParam={
      roleId: this.statusData.indexOf(this.selectDefault)
    }
    this.http.accountSearch(this.searchParam).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }


}
