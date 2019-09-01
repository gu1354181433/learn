import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {CommonService} from '../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../services/common/common.namespec';

@Component({
  selector: 'app-example-detail',
  templateUrl: './example-detail.component.html',
  styleUrls: ['./example-detail.component.scss']
})
export class ExampleDetailComponent implements OnInit {
  private searhParams = {
    id:'',//分类id
    detId:''//项目id
  }
  data:any;
  constructor(private http: HttpService , private  commonService: CommonService, private activeRouter: ActivatedRoute,private route:Router, ) { }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(res => {
      console.log(res)
      this.searhParams.id = res.id;
      this.searhParams.detId = res.id;
      if(this.searhParams.id == '1' && this.searhParams.detId == '1'){
        this.data = [{}]
      }
      if(this.searhParams.id == '1' && this.searhParams.detId == '2'){}
      if(this.searhParams.id == '2' && this.searhParams.detId == '1'){}
      if(this.searhParams.id == '2' && this.searhParams.detId == '2'){}
      if(this.searhParams.id == '3' && this.searhParams.detId == '1'){}
      if(this.searhParams.id == '3' && this.searhParams.detId == '2'){}
      if(this.searhParams.id == '4' && this.searhParams.detId == '1'){}
      if(this.searhParams.id == '4' && this.searhParams.detId == '2'){}
      if(this.searhParams.id == '5' && this.searhParams.detId == '1'){}
      if(this.searhParams.id == '5' && this.searhParams.detId == '2'){}
      if(this.searhParams.id == '6' && this.searhParams.detId == '1'){}
      if(this.searhParams.id == '6' && this.searhParams.detId == '2'){}

    });
  }

}
