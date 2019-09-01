import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';
import {CommonService} from '../../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../../services/common/common.namespec';

@Component({
  selector: 'app-testing-detail',
  templateUrl: './testing-detail.component.html',
  styleUrls: ['./testing-detail.component.scss']
})
export class TestingDetailComponent implements OnInit {
  listOfData: any[];
  private params = {
    id:''
  }
  private searhParams = {
    id:'',//分类id
    detId:''//项目id
  }
  constructor(private http: HttpService , private  commonService: CommonService, private activeRouter: ActivatedRoute,private route:Router, ) { }
  //跳转分类详情
  getReportDet(detId):void{
    this.searhParams.detId = detId;
    this.searhParams.id = this.params.id;
    console.log(this.searhParams)
    this.route.navigate(['example', 'list'], { queryParams: this.searhParams }).then(() => {
      window.location.reload();
    });
  }
  ngOnInit() {
    this.activeRouter.params.subscribe(res => {
      this.params.id = res.id;
    });
  }

}
