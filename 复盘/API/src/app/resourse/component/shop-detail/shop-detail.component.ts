import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {CommonService} from '../../../services/common/common.service';
import {ActivatedRoute} from '@angular/router';
import {response} from '../../../services/common/common.namespec';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {
   id: any;
   data: any;
   detail: any;

  constructor(private http: HttpService , private  commonService: CommonService, private route: ActivatedRoute, ) { }


  loadData()  {
    this.http.getShopById(this.id).subscribe((res: response) => {
      if (res.code === 0) {
        this.data = res.data;
        this.detail = JSON.parse(res.data.detail);
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });
  }


  ngOnInit() {

    this.route.params.subscribe(res => {
      console.log(res);
      this.id = res.id;
      this.loadData()

    });
  }

}
