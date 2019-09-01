import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../../http/http.service"
@Component({
  selector   : 'app-role',
  templateUrl: './role.component.html',
  styleUrls  : ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  searchParam: any;
  adad       : any;
  roleId     : any;
  listOfData : any=[];
  statusData = ['全部', '最高管理员', '管理员'];
  constructor(private router: Router,private http: HttpService) { }

  ngOnInit() {
    this.http.roleSearch().subscribe(
      (data:any)=>{

        this.listOfData = data.data.roleList
        console.log(data);
      }
    )
  }
  edit(id: any) {
    this.router.navigate(['./home/role-detail', id], { queryParams: { name: "detail" } })
  }
  add(id:any){
    this.router.navigate(['./home/role-detail',id])
  }
  deleteRow(id: number): void {
    console.log(this.listOfData)
    this.listOfData = this.listOfData.filter(d => d.roleId !== id);

  }

}
