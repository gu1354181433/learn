import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../services/http/http.service';
import {CommonService} from '../../services/common/common.service';
import {response} from '../../services/common/common.namespec';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 array = [
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/b7f721e2-bfaa-445a-99c1-1f6f29d360e6.jpg',
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/e5ae77ab-d225-45bd-b220-202302fec5ba.jpg',
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/cf9cad1c-c941-4141-8e36-3c46f1a333a3.jpg',
  ];

   app = document.querySelector('#carousel');
   storyArr: any;
   storyMain: any;
  constructor(
    private http: HttpService, private  commonService: CommonService,  private  router: Router , private  activeRouter: ActivatedRoute
  ) { }


  changeStory(item) {
    if (!item.isSelect) {
      this.storyArr.map(i => {
        return i.isSelect = false;
      });
      item.isSelect = true;
      this.storyMain = item.content;
    }
  }


  ngOnInit() {
    console.log( this.app);
    this.http.articles({type: 31, page: 1, size: 99}).subscribe((res: response) => {
           console.log(res);
      if (res.code === 0) {
        const arr = [];
        const data = res.data['articleList'];
        data.forEach(item => {
           arr.push(
             {
               url: JSON.parse(item.img).url,
               link:item.source
             }
           );
        });
        this.array = arr;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });


    this.http.articles({type: 40, page: 1, size: 5}).subscribe((res: response) => {
      if (res.code === 0) {
        const arr = [];
        const data = res.data['articleList'];
        data.forEach(item => {
          item.img = JSON.parse(item.img).url;
          item.content = JSON.parse(item.content)[0]['value'];
        });
        console.log(data);
        this.storyArr = data;
        this.storyArr[0].isSelect = true;
        this.storyMain = this.storyArr[0].content;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });


  }

}
