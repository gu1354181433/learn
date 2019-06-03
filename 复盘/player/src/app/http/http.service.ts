import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient ) {}
  public videoList(params?:any){
    return  this.http.get('/mail/a/u/video/list',{params: params});
  }
  public videoDetail(id:any,head:any){
    return  this.http.get('/mail/a/u/video/'+id,{headers: head});
  }
  public commentList(params:any){
    return  this.http.get('/mail/a/u/comment',{params: params});
  }
  public commentAdd(param:any){
    return  this.http.request('post','/mail/a/u/comment',{params: param});
  }
}
