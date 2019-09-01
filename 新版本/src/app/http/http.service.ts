import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient ) {}
  public videoList(header?:any,params?:any){
    return  this.http.get('/a/u/video/list',{params: params,headers:header});
  }
  public videoDetail(id:any){
    return  this.http.get('/a/u/video/'+id);
  }
  public videoEdit(id:any,param:any){
    return  this.http.request('put','/a/u/video/'+id,{params: param});
  }
  public videoAdd(param:any){
    return  this.http.request('post','/a/u/video',{params: param});
  }
  public  accountDetail(id:any){
    return this.http.get('/a/u/user/'+id);
  }
  public accountAdd(param:any){
    return  this.http.request('post','/a/u/user',{params: param});
  }
  public accountSearch(param?:any){
    return  this.http.get('/a/u/user/list',{params: param});
  }
  public  roleSearch(){
    return this.http.get('/a/u/role/list');
  }
  public  roleAdd(id:any){
    return this.http.get('/a/u/role/'+id);
  }
  public roleSave(id:any,param:any){
    return  this.http.request('put','/a/u/role/'+id,{params: param});
  }
  public  commentSearch(params?:any){
    return this.http.get('/a/u/comment/list',{params: params});
  }
  public  commentDetail(id:any){
    return this.http.get('/a/u/comment/'+id);
  }
  public commentSave(id:any,param:any){
    return  this.http.request('put','/a/u/comment/'+id,{params: param});
  }
  public videoChange(id:any,param:any){
    return  this.http.request('put','/a/u/comment/'+id,{params: param});
  }
  public login(param:any){
    return  this.http.request('post','/a/login',{params: param});
  }
}
