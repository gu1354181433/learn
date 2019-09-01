import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {response} from '../../../services/common/common.namespec';
import {CommonService} from '../../../services/common/common.service';



@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  array = [
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/b7f721e2-bfaa-445a-99c1-1f6f29d360e6.jpg',
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/e5ae77ab-d225-45bd-b220-202302fec5ba.jpg',
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/cf9cad1c-c941-4141-8e36-3c46f1a333a3.jpg',
  ];
   listData: any;
  constructor(private http: HttpService , private  commonService: CommonService) { }




  loadData(params: object): void {


    this.http.getShopList().subscribe( ( res: response) => {
      if (res.code === 0) {
          console.log(res);
          this.listData = res.data;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });




  }



  ngOnInit() {
    this.loadData({});
    this.http.articles({type: 30, page: 1, size: 5}).subscribe((res: response) => {
      console.log(res);
      if (res.code === 0) {
        const arr = [];
        const data = res.data['articleList'];
        data.forEach(item => {
          arr.push(
            {
              url: JSON.parse(item.img).url,
              link: item.source
            }
          );
        });
        this.array = arr;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });

  }

  goWhere (e) {
    e.stopPropagation();

  }

}
