import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';
import {CommonService} from '../../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../../services/common/common.namespec';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  data: any;
  
  private searhParams = {
    id:'',
    boxId:'',
    detId:''
  }
  // private test = {
  //   name:'',
  // }
  reportLi :any;
  testli=new Array;
  test:{name:string}
  constructor(private http: HttpService , private  commonService: CommonService, private activeRouter: ActivatedRoute,private route:Router, ) { }
  //获取报告目录列表
  loadData()  {
    this.http.getTestReport(this.searhParams.boxId).subscribe((res: response) => {
      if (res.code === 0) {
        this.data = JSON.parse(res.data.resultNew).classify;
        // this.test.name = JSON.parse(res.data.resultNew).productName;
        for (const key in this.data) {
          console.log(this.data[key]);
          if(this.data[key].id == this.searhParams.id){
            for(const ke in this.data[key].item){
              this.data[key].item[ke].detId = ke;
              this.testli.push(this.data[key].item[ke])
            }
            this.reportLi = this.data[key];
          }
        }
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });
  }
  //跳转分类详情
  getReportDet(detId):void{
    this.searhParams.detId = detId;
    this.route.navigate(['reportDetail', 'list'], { queryParams: this.searhParams }).then(() => {
      window.location.reload();
    });
  }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(res => {
      this.searhParams = JSON.parse(JSON.stringify(res));
      this.loadData()
    });
  }

}
