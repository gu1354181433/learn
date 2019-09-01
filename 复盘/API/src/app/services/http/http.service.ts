import { Injectable } from '@angular/core';
import { AddressService } from '../address/address.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { LoginParams } from '../login/login.namespec';
import { CommonService } from '../common/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(  private addressService: AddressService, private  http: HttpClient, private commonService: CommonService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  loginIn(params) {
    return this.http.post(this.addressService.loginIn(),  this.commonService.mapObjectToParams(params), this.httpOptions);
  }

  register (params) {
    return this.http.post(this.addressService.register(),this.commonService.mapObjectToParams(params), this.httpOptions);
  }
  voteCode (params) {
    return this.http.post(this.addressService.code(), this.commonService.mapObjectToParams(params), this.httpOptions);
  }
  findBackPwd  (verify: number, mobile: number) {
    return this.http.get(this.addressService.findPwd(verify, mobile), this.httpOptions);
  }
  articles  (params) {
    return this.http.get(this.addressService.articles(params.type,params.page,params.size),this.httpOptions);
  }
  changeBinding  (verify, mobile) {
    return this.http.get(this.addressService.changeBinding(verify, mobile), this.httpOptions);
  }
  changePwd (params) {
    return this.http.put(this.addressService.newPwd(), this.commonService.mapObjectToParams(params), this.httpOptions);
  }
  putMobile (params) {
    return this.http.put(this.addressService.putMobile(), this.commonService.mapObjectToParams(params), this.httpOptions);
  }
  // getroleModule  (verify: number,) {
  //   return this.http.get(this.addressService.roleModule(id), this.httpOptions);
  // }
  // etmultiModule  (params: []) {
  //   return this.http.get(this.addressService.multiModule(), {params: this.commonService.mapArrayToParams(params, 'ids')});
  // }
  // addModule (params: {}) {
  //   return this.http.post(this.addressService.addModule(), this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // getModule () {
  //   return this.http.get(this.addressService.getModule(), this.httpOptions);
  // }
  // updateModule (id: number, params: {}) {
  //   return this.http.put(this.addressService.updateModule(id), this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // deleteModule (id: number) {
  //   return this.http.delete(this.addressService.updateModule(id),  this.httpOptions);
  // }
  // getRoleModule (page: number, size: number) {
  //   return this.http.get(this.addressService.getRole(page, size), this.httpOptions);
  // }
  // getMultiRoles (params: any[]) {
  //   return this.http.get(this.addressService.multiRoles(),  {params: this.commonService.mapArrayToParams(params, 'ids')});
  // }
  // addRole (params: {}) {
  //   return this.http.post(this.addressService.addRole(), this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // getRoleDetail(id: number) {
  //   return this.http.get(this.addressService.getRoleDetail(id), this.httpOptions);
  // }
  // putRole(id: number, params: {}) {
  //   return this.http.put(this.addressService.putRole(id),  this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // delRole(id: number) {
  //   return this.http.delete(this.addressService.putRole(id),  this.httpOptions);
  // }
  // putPwd(params: {}) {
  //   return this.http.put(this.addressService.putPwd(),  this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // getManagerList(page: number, size: number) {
  //   return this.http.get(this.addressService.getManager(page, size), this.httpOptions);
  //
  // }
  //
  //
  //
  // getMultiManger (params: []) {
  //   return this.http.get(this.addressService.getMultiManager(), {params: this.commonService.mapArrayToParams(params, 'ids')});
  // }
  // addManager (params: {}) {
  //   return this.http.post(this.addressService.addManager(), this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // updateManager (id: number, params: {}) {
  //   return this.http.put(this.addressService.updateManager(id), this.commonService.mapObjectToParams(params), this.httpOptions);
  // }
  // deleteManager (id: number) {
  //   return this.http.delete(this.addressService.updateManager(id), this.httpOptions);
  // }
  
  //获取个人信息
  getPerson (){
    return this.http.get(this.addressService.getPerson(),this.httpOptions)
  }
  articlesDateil (id:number){
    return this.http.get(this.addressService.articlesDateil(id),this.httpOptions)
  }
  //修改个人信息
  updatePerson (params: Object){
    return this.http.put(this.addressService.getPerson( ),this.commonService.mapObjectToParams(params), this.httpOptions)
  }
  //修改密码
  editPwd (params){
    return this.http.put(this.addressService.editPwd( ),this.commonService.mapObjectToParams(params), this.httpOptions)
  }
  //获取检测项目列表
  getitemsLi(){
    return this.http.get(this.addressService.getitemsLi(),this.httpOptions)
  }
  //获取我的基因盒
  getGeneLi(){
    return this.http.get(this.addressService.getGeneLi(),this.httpOptions)
  }
  //绑定基因盒
  postBinding (params){
    return this.http.post(this.addressService.postBinding(),this.commonService.mapObjectToParams(params), this.httpOptions);
  }
  //获取检测报告
  getTestReport(id){
    return this.http.get(this.addressService.getTestReport(id),this.httpOptions)
  }

  //shop

  getShopList () {
     return this.http.get(this.addressService.getShopList(),this.httpOptions)
  }
  getShopById (id) {
    return this.http.get(this.addressService.getShopDetail(id),{});
  }
  getShopByName (params) {
    return this.http.get(this.addressService.getShopByname(),{params: params} );
  }
  // articles

  getArticlesByParams  (params,type) {
    return this.http.get(this.addressService.getArticles(type),  {params: params} );

  }


  //wxlogin

  getUserInfoByWx (params) {
    return this.http.post(this.addressService.getOpenId(),  this.commonService.mapObjectToParams(params), this.httpOptions );

  }
  wxRegister (params) {
    return this.http.put(this.addressService.wxRegister(),  this.commonService.mapObjectToParams(params), this.httpOptions );

  }
}
