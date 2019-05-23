import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient ) {}
  public videoList(){
    return  this.http.get('/mail/a/u/video/list');
  }
  public videoDetail(id:any){
    return  this.http.get('/mail/a/u/video/'+id);
  }
  public videoEdit(id:any,param:any){
    return  this.http.request('put','/mail/a/u/video/'+id,{params: param});
  }
  public videoAdd(param:any){
    return  this.http.request('post','/mail/a/u/video',{params: param});
  }
  public  accountDetail(id:any){
    return this.http.get('/mail/a/u/user/'+id);
  }
  public accountAdd(param:any){
    return  this.http.request('post','/mail/a/u/user',{params: param});
  }
  public accountSearch(param?:any){
    return  this.http.get('/mail/a/u/user/list',{params: param});
  }
}
