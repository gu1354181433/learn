import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {CommonService} from '../../../services/common/common.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {response} from '../../../services/common/common.namespec';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
   itemsArray: ({ name: string; isSelect: boolean; child: string[] } | { name: string; child: string[] })[];


  constructor(
    private http: HttpService,
    private commonService: CommonService,
    private  router: Router ,
  ) {}
  changeItem(item) {
    item.isSelect = item.isSelect ? !item.isSelect : true;
  }
  ngOnInit() {

    this.http.getitemsLi().subscribe( (res: response) => {
      if (res.code === 0) {
        res.data['classifyList'].forEach( function (item, idx) {
          item.child = [];
          res.data['itemList'].forEach(function (iitem) {
            if (iitem['classifyId'] == item['id']) {
              item.child.push(
                iitem.name
              );
            }
          });
        });
          console.log(res.data);

        this.itemsArray = res.data.classifyList;




      }else{
        this.commonService.messageProp('error', res.message);
      }
    })
  }

}
