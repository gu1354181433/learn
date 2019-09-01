import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';
import {CommonService} from '../../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../../services/common/common.namespec';

@Component({
  selector: 'app-testreport',
  templateUrl: './testreport.component.html',
  styleUrls: ['./testreport.component.scss']
})
export class TestreportComponent implements OnInit {

  id: any;
  data: any;
  reportLi = new Array;
  testli=new Array;
  private params = {
    id :'',
    boxId:'',
  }
  // private test = {
  //   name:'',
  // }
  test:{name:string}
  constructor(private http: HttpService , private  commonService: CommonService, private route: ActivatedRoute,private rot:Router, ) { }
  //获取报告目录列表
  loadData()  {
    this.http.getTestReport(this.id).subscribe((res: response) => {
      if (res.code === 0) {
        this.data = JSON.parse(res.data.resultNew).classify;
        // this.test.name = JSON.parse(res.data.resultNew).productName;
        console.log(JSON.parse(res.data.resultNew))
        for (const key in this.data) {
          this.data[key].itemLength = 0;
          for(const ke in this.data[key].item){
            this.data[key].itemLength = this.data[key].itemLength+1;
          }
          this.reportLi.push(this.data[key])
        }
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });
  }
  getReportLi(id):void{
    this.params.id = id;
    this.params.boxId = this.id;
    console.log(this.params)
    this.rot.navigate(['reportLi', 'list'], { queryParams: this.params }).then(() => {
      window.location.reload();
    });
  }
  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.loadData()

    });
  }

}
