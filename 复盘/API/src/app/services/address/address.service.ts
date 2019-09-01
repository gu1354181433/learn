import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  loginIn(): string {
    return 'a/login';
  }
  register (): string {
    return ' /a/register';
  }
  code()  {
    return '/a/verify';
  }
  findPwd(verify, mobile) {
    return '/a/verify/?verify=' + verify + '&mobile=' + mobile + '&type=password';
  }
  putMobile(){
    return '/a/u/mobile'
  }
  articles(type,page,size){
    return '/a/articles?type=' + type + '&page=' + page + '&size='+size
  }
  articlesDateil(aid:number){
    return '/a/article/'+aid
  }
  changeBinding(verify, mobile) {
    return '/a/verify/?verify=' + verify + '&mobile=' + mobile + '&type=changeBinding';
  }
  newPwd() {
    return '/a/password/forget';
  }

  roleModule (id: number): string {
    return 'a/u/role/' + id + '/module';
  }

  multiModule  (): string {
    return 'a/u/multi/module';
  }
  managerList (): string {
    return 'a/u/manager/list';
  }
  multiRoles  (): string {
    return 'a/u/multi/role';
  }
  addModule = function (): string {
    return '/a/u/module';
  };
  getModule = function (): string {
    return '/a/u/module?size=9999';
  };
  updateModule = function (id: number): string {
    return '/a/u/module/' + id;
  };
  getRole = function (page: number, size: number) {
    return '/a/u/role/?page=' + page + '&size=' + size;
  };
  addRole = function () {
    return '/a/u/role';
  };
  getRoleDetail = function (id: number) {
    return '/a/u/role/' + id + '/module';
  };
  putRole = function (id: number) {
    return '/a/u/role/' + id;
  };
  putPwd = function() {
    return 'a/u/pwd';
  };
  getManager  = function(page: number, size: number) {
    return '/a/u/manager/list?page=' + page + '&size=' + size;
  };
  getMultiManager = function () {
    return '/a/u/multi/manager';
  };
  addManager  = function () {
    return '/a/u/manager';
  };
  updateManager = function (id: number): string {
    return '/a/u/manager/' + id;
  };
//获取个人信息
getPerson = function (){
  return '/a/u/user'
}
//修改密码
editPwd = function (){
  return '/a/u/pwd'
}
//获取检测项目列表
getitemsLi = function(){
  return '/a/items'
}
//获取我的基因盒
getGeneLi =function(){
  return '/a/u/boxes'
}
//绑定基因盒
postBinding = function(){
  return '/a/u/box'
}
//获取检测报告
getTestReport = function(id){
  return '/a/u/box/'+id;
}
//
  getShopByname = function () {
  return '/a/fuzzy/product'
  }

  getShopList = function() {
    return '/a/product/search';
  };
  getShopDetail = function(pid) {
    return `/a/product/${pid}`;
  };

  // articles

   getArticles = function (type) {
      return '/a/fuzzy/article?type=' + type ;
   }

   //wxlogin
  getOpenId = function () {
    return '/a/openid'
  }
  wxRegister = function () {
    return '/a/wxBinding'
  }


}
