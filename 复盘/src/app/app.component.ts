import { Component,  OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
declare let wx: any;
@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private router: Router,private http:HttpClient)  {};
  public getSign() {
    console.log("1")
    // 将 wx.config 转为 Observable对象
    return new Observable(sign => {
      // 获取签名数据
      this.http.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx2750055a558bbe86&secret=WrLrhDiA7PvJeQOrikJeP3zhMbvhk1UmFQBA5Nprmim`).subscribe(r => {
        wx.config({
          // debug: true,
          appId    : 'xxxxx',
          timestamp: r,
          nonceStr : r,
          signature: r,
          jsApiList: ['checkJsApi', 'chooseImage', 'getLocalImgData', 'miniProgram']
        })
        console.log(r);
        wx.ready((res) => {
          sign.next(res)
        })
        wx.error((err) => {

        })
      })
    })
  }
  ngOnInit(): void {
    this.getSign();
  }
}
