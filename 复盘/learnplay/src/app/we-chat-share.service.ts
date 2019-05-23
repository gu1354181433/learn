import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";




declare let wx: any;
@Injectable({
  providedIn: 'root'
})
export class WeChatShareService {
  constructor(private http:HttpClient) {}
// 后台获取signature
public getWXJsInitConfig(url): any {
  // let wxSignUrl = environment.signatureApi + url;
  // return this.baseService.getNoHandleErr(wxSignUrl)
  //   .then(data => { return data.data });
}

// 根据后台获取的数据注册config
public configWXJs(obj: any, jsApiList: Array<string>) {
  wx.config({
    debug    : false,
    appId    : obj.appId,
    timestamp: obj.timestamp + '',
    nonceStr : obj.nonceStr,
    signature: obj.signature,
    jsApiList: jsApiList
  });
}
// 对分享信息进行处理，并注册分享函数
public getShareDataAndReady(title, imgUrl, desc, slug) {

  let shareTitle = title ? title : '自定义title';
  let shareImg   = imgUrl ? imgUrl : "默认图片";
  let shareDesc  = desc ? desc : '默认描述';
  let link       = location.href;

  wx.ready(function () {
    wx.onMenuShareAppMessage({ title: shareTitle, link: link , desc: shareDesc, imgUrl: shareImg });  // 分享微信
    wx.onMenuShareTimeline({ title: shareTitle, link: link , desc: shareDesc, imgUrl: shareImg });    // 分享到朋友圈
    wx.onMenuShareQQ({ title: shareTitle, link: link , desc: shareDesc, imgUrl: shareImg });          // 分享到QQ
  });
}
}
