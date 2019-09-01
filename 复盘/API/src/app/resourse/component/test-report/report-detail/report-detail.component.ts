import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';
import {CommonService} from '../../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../../services/common/common.namespec';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {

  data: any;
  reportDet:any;
  custom:any;
  private searhParams = {
    id:'',
    boxId:'',
    detId:''
  }
  reportNum:any;
  testli=new Array;
  private paddingleft:string = "px"
  constructor(private http: HttpService , private  commonService: CommonService, private activeRouter: ActivatedRoute,private route:Router, ) { }
  //获取报告目录列表
  loadData()  {
    this.http.getTestReport(this.searhParams.boxId).subscribe((res: response) => {
      if (res.code === 0) {
        this.data = JSON.parse(res.data.resultNew).classify;
        for (const key in this.data) {
          if(this.data[key].id == this.searhParams.id){
            for(const ke in this.data[key].item){
              if(ke == this.searhParams.detId){
                this.data[key].item[ke].showType = this.data[key].showType;
                this.reportDet = this.data[key].item[ke];
                this.reportDet.min = 1;
                this.reportDet.max = 1;
                for(const k in this.data[key].item[ke].locus){
                  this.data[key].item[ke].locus[k].name = k;
                  this.testli.push(this.data[key].item[ke].locus[k])
                  this.reportDet.min = this.reportDet.min*this.data[key].item[ke].locus[k].min;
                  this.reportDet.max = this.reportDet.max*this.data[key].item[ke].locus[k].max;
                }
                this.paddingleft = (this.reportDet.resultNum-this.reportDet.min)/(this.reportDet.max-this.reportDet.min)*360 +this.paddingleft;
                console.log(this.reportDet.min,this.reportDet.max)
              }
            }
          }
        }
        console.log(this.testli)
        this.custom = JSON.parse(this.reportDet.custom)
        console.log(this.reportDet)
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });
  }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(res => {
      this.searhParams = JSON.parse(JSON.stringify(res));
      this.loadData()
    });
  }
}
